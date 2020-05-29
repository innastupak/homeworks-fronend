const promise = new Promise((resolve, reject) => {

    console.log(0);
    resolve();
});

promise
    .then(() => {
        console.log(1);
        return Promise.resolve();
    }, () => {
        console.log(2);
        return Promise.resolve();
    })

    .then(() => {
        console.log(3);
        return Promise.reject();
    }, () => {
        console.log(4);
    })

    .then(() => {
        console.log(5);
    }, () => {
        console.log(6);
        return Promise.reject();
    })

    .then(() => {
        console.log(7);
        return Promise.resolve();
    }, () => {
        console.log(8);
        return Promise.resolve();
    })

    .then(() => {
        console.log(9);
        return Promise.reject();
    }, () => {
        console.log(10);
    })

    .then(() => {
        console.log(11);
    }, () => {
        console.log(12);
    });