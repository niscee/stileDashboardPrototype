// demo data for prototype.
const datas = {
  AVC: {
    title: "AVC",
    avc: "AVC400015106608",
    TechnologyType: "HFC",
    Username: "Jane",
    FNNNumber: "3243255543545",
    PriNumber: "PRI3254243432",
    CVC: "CVC432432432",
    result: "GOOD",
    staleAt: "2022-07-11T07:18:58Z",
    modalInfo:
      "Nischal lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, velscelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metusauctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, velscelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metusauctor fringilla.",
  },
  NBN: {
    title: "NBN",
    time: "10:31:51",
    GHz: "Enabled (Up)",
    HighGHz: "Enabled (Up)",
    Mesh: "0 Extender",
    ConnectedDevice: 20,
    result: "GOOD",
    staleAt: "2022-07-11T07:18:58Z",
  },
};

export const getNBN = () => {
  const newstuff = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(datas["NBN"]);
    }, 1000);
  });
  return newstuff;
};

export const getAVC = () => {
  const newstuff = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(datas["AVC"]);
    }, 2000);
  });
  return newstuff;
};

export default datas;
