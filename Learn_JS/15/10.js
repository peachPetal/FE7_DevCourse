// ES5
// 콜백함수
// ES6
// Promise
// ES7
// async, await (syntatic sugar)

function fetchNumber(){
    return new Promise((resolve) => resolve(2));
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchNumber() {
    // delay(5000)
    // .then(() => {
    //     console.log("2");
    // })
    await delay(5000);
    return 2;
    // return true;
}

fetchNumber() //
    .then(console.log);

// -------------------------------------------

const getSunIcon = async () => {
    await delay(2000);
    return "☀️";
};
const sun = getSunIcon();
console.log(sun);

const getWaveIcon = async () => {
    await delay(1000);
    return "🌊";
};
const getCloudIcon = async () => {
    await delay(2000);
    return "☁️";
};
const getAllWeatherIcons = () => {
    getSunIcon().then((sun) => {
        return getWaveIcon().then((wave) => {
            return getCloudIcon().then((cloud) => {
                console.log(sun, wave, cloud);
            })
        })
    })
};
getAllWeatherIcons();

const getAllWeatherIconsAsync = async () => {
    console.time();
    // const sun = await getSunIcon();
    // const wave = await getWaveIcon();
    // const cloud = await getCloudIcon();
    // console.log(sun, wave, cloud);
    // const [sun, wave, cloud] = await Promise.all([getSunIcon(), getWaveIcon(), getCloudIcon()]);
    const result = await Promise.allSettled([getSunIcon(), getWaveIcon(), getCloudIcon()]);
    // console.log(result.join(" "));
    const [sun, wave, cloud] = await Promise.race([getSunIcon(), getWaveIcon(), getCloudIcon()]);
    console.log(sun, wave, cloud);
    console.timeEnd();
}

getAllWeatherIconsAsync();
console.log("hello");