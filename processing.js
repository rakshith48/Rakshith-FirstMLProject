var model;

async function loadModel() {

    // const dataX0 = [[0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.33, 0.73, 0.62, 0.59, 0.24, 0.14, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.87, 1.00, 1.00, 1.00, 1.00, 0.95, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.67, 0.20, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.26, 0.45, 0.28, 0.45, 0.64, 0.89, 1.00, 0.88, 1.00, 1.00, 1.00, 0.98, 0.90, 1.00, 1.00, 0.55, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.07, 0.26, 0.05, 0.26, 0.26, 0.26, 0.23, 0.08, 0.93, 1.00, 0.42, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.33, 0.99, 0.82, 0.07, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.09, 0.91, 1.00, 0.33, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.51, 1.00, 0.93, 0.17, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.23, 0.98, 1.00, 0.24, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.52, 1.00, 0.73, 0.02, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.04, 0.80, 0.97, 0.23, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.49, 1.00, 0.71, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.29, 0.98, 0.94, 0.22, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.07, 0.87, 1.00, 0.65, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.01, 0.80, 1.00, 0.86, 0.14, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.15, 1.00, 1.00, 0.30, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.12, 0.88, 1.00, 0.45, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.52, 1.00, 1.00, 0.20, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.24, 0.95, 1.00, 1.00, 0.20, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.47, 1.00, 1.00, 0.86, 0.16, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.47, 1.00, 0.81, 0.07, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00
    // ]];
    // const myTensor = tf.tensor(dataX0);
    model = await tf.loadGraphModel('tfjs/model.json')
    // const result = model.predict(myTensor);
    // result.print();

}

function predictImage() {
    // console.log('processing...');

    let image = cv.imread(canvas);
    cv.cvtColor(image, image, cv.COLOR_RGB2GRAY, 0);
    cv.threshold(image, image, 175, 255, cv.THRESH_BINARY);

    let contours = new cv.MatVector();
    let heirarchy = new cv.Mat();
    cv.findContours(image, contours, heirarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    let output = [];

    let contours2 = new cv.MatVector();
    let heirarchy2 = new cv.Mat();

    let ims = [];

    if (contours.size() == 2){
        if (contours.get(0).data32S[0] > contours.get(1).data32S[0]) {
            ims.push(contours.get(1));
            ims.push(contours.get(0));
        } else{
            ims.push(contours.get(0));
            ims.push(contours.get(1));
        }
    } else{
        ims.push(contours.get(0));
    }

    for (let i = 0; i < ims.length; i++) {

        let cnt = ims[i];
        let rect = cv.boundingRect(cnt);
        let image2 = image.roi(rect);

        var height = image2.rows;
        var width = image2.cols;

        // if (image2.data[4] != 255) {

        if (height > width) {
            height = 20;
            const scaleFactor = image2.rows / height;
            width = Math.round(image2.cols / scaleFactor);
        } else {
            width = 20;
            const scaleFactor = image2.cols / width;
            height = Math.round(image2.rows / scaleFactor);
        }

        let dsize = new cv.Size(width, height);
        cv.resize(image2, image2, dsize, 0, 0, cv.INTER_AREA);

        const LEFT = Math.ceil(4 + (20 - width) / 2);
        const RIGHT = Math.floor(4 + (20 - width) / 2);
        const BOTTOM = Math.floor(4 + (20 - height) / 2);
        const TOP = Math.ceil(4 + (20 - height) / 2);

        let BLACK = new cv.Scalar(0, 0, 0, 0);
        cv.copyMakeBorder(image2, image2, TOP, BOTTOM, LEFT, RIGHT, cv.BORDER_CONSTANT, BLACK);

        cv.findContours(image2, contours2, heirarchy2, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
        let cnt2 = contours2.get(0);
        const Moments = cv.moments(cnt2, false);

        const cx = Moments.m10 / Moments.m00;
        const cy = Moments.m01 / Moments.m00;
        // console.log(`cx: ${cx}, cy: ${cy}, M00: ${Moments.m00}`);

        const X_SHIFT = Math.round(image2.cols / 2.0 - cx);
        const Y_SHIFT = Math.round(image2.rows / 2.0 - cy);

        dsize = new cv.Size(image2.cols, image2.rows);
        let M = cv.matFromArray(2, 3, cv.CV_64FC1, [1, 0, X_SHIFT, 0, 1, Y_SHIFT]);
        cv.warpAffine(image2, image2, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, BLACK);

        let pixelValues = image2.data;

        pixelValues = Float32Array.from(pixelValues);

        pixelValues = pixelValues.map(function (item) {
            return item / 255.0;
        });

        // console.log(pixelValues);

        const X = tf.tensor([pixelValues]);
        // console.log(`Shape of Tensor: ${X.shape}`);
        // console.log(`dtype of Tensor: ${X.dtype}`);

        const result = model.predict(X);
        result.print()

        // const outputCanvas = document.createElement('CANVAS');
        // cv.imshow(outputCanvas, image2);
        // document.body.appendChild(outputCanvas);

        output.push(result.dataSync()[0]);

        cnt.delete();
        cnt2.delete();
        image2.delete();
        M.delete();
        X.dispose();
        result.dispose();
        // }

    }

    contours2.delete();
    heirarchy2.delete();

    // let cnt = contours.get(0);
    // let cnt2 = contours.get(1);
    // let rect = cv.boundingRect(cnt);
    // let rect2 = cv.boundingRect(cnt2);
    // let image2 = image.roi(rect2);
    // image = image.roi(rect);


    // var height = image.rows;
    // var width = image.cols;

    // if (height>width) {
    //     height = 20;
    //     const scaleFactor = image.rows/height;
    //     width = Math.round(image.cols/scaleFactor);
    // } else{
    //     width = 20;
    //     const scaleFactor = image.cols/width;
    //     height = Math.round(image.rows/scaleFactor);
    // }

    // let dsize = new cv.Size(width, height);
    // cv.resize(image, image, dsize, 0, 0, cv.INTER_AREA);

    // const LEFT = Math.ceil(4 + (20 - width)/2);
    // const RIGHT = Math.floor(4 + (20 - width)/2);
    // const BOTTOM = Math.floor(4 + (20 - height)/2);
    // const TOP = Math.ceil(4 + (20 - height)/2);

    // // console.log(`top: ${TOP}, Bottom ${BOTTOM}, right: ${RIGHT}, left: ${LEFT}`);

    // let BLACK = new cv.Scalar(0, 0, 0, 0);
    // cv.copyMakeBorder(image, image, TOP, BOTTOM, LEFT, RIGHT, cv.BORDER_CONSTANT, BLACK);

    // cv.findContours(image, contours, heirarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
    // cnt = contours.get(0);
    // const Moments = cv.moments(cnt, false);

    // const cx = Moments.m10/Moments.m00;
    // const cy = Moments.m01/Moments.m00;
    // // console.log(`cx: ${cx}, cy: ${cy}, M00: ${Moments.m00}`);

    // const X_SHIFT = Math.round(image.cols/2.0 - cx);
    // const Y_SHIFT = Math.round(image.rows/2.0 - cy);

    // dsize = new cv.Size(image.cols, image.rows);
    // let M = cv.matFromArray(2, 3, cv.CV_64FC1, [1, 0, X_SHIFT, 0, 1, Y_SHIFT]);
    // cv.warpAffine(image, image, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, BLACK);

    // let pixelValues = image.data;
    // // console.log(`pixel values: ${pixelValues}`);

    // pixelValues = Float32Array.from(pixelValues);

    // pixelValues = pixelValues.map(function (item) {
    //     return item / 255.0;
    // });

    // // console.log(pixelValues);

    // const X = tf.tensor([pixelValues]);
    // console.log(`Shape of Tensor: ${X.shape}`);
    // console.log(`dtype of Tensor: ${X.dtype}`);

    // const result = model.predict(X);
    // result.print()

    // const output = result.dataSync()[0];

    // console.log(tf.memory());

    // Testing only
    // const outputCanvas = document.createElement('CANVAS');
    // cv.imshow(outputCanvas, image);
    // document.body.appendChild(outputCanvas);

    // const outputCanvas2 = document.createElement('CANVAS');
    // cv.imshow(outputCanvas2, image2);
    // document.body.appendChild(outputCanvas2);

    image.delete();
    contours.delete();
    heirarchy.delete();
    // cnt.delete();
    // M.delete();
    // X.dispose();
    // result.dispose();

    return output;
}  