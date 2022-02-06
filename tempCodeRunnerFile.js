    _.go(
        payments,
        _.reject(p => orderIds.includes(p.order_id)),
        console.log
    )