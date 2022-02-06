import {track} from './resource/track.js';
import * as L from 'fxjs/Lazy';
import * as C from 'fxjs/Concurrency'
import * as _ from 'fxjs/Strict';
import { cancelPayments, DB, getPayments } from './resource/Impt.js';

// _.go(
//     L.range(Infinity),
//     L.map(i => track[i].cars),
//     L.takeUntil(({length: l}) => l < 4),
//     L.map(_.delay(2000)),
//     L.flat,
//     L.map(car => `${car} 출발!`),
//     _.each(console.log),
// )

// 4. 아임포트 결제 누락 스케쥴러 만들기

async function job(){

    // 결제된 결제모듈측 payments를 가져온다.
    // page 단위로 가져오는데, 끝날 때 까지 하나로 합친다.
    // 결제 데이터가 있을 때 까지 모두 가져와서 하나로 합친다.
    const payments = await _.go(
        L.range(1, Infinity),
        L.map(getPayments),
        L.takeUntil(({length}) => length < 3),
        L.flat,
        _.takeAll,
    )

    // 결제가 실제로 완료된 가맹점 측 주문서 id들을 뽑는다.
    const orderIds = _.go(await DB.getOrders(), _.map(({id}) => id))

    _.go(
        payments,
        L.reject(p => orderIds.includes(p.order_id)),
        L.map(p => p.imp_id),
        L.map((impt) => cancelPayments(impt)), 
        _.each(console.log),
    )
    
}

(function recur() {
    Promise.all([
        _.delay(10000, undefined),
        job()
    ]).then(recur);
})();