const dbName = "ontestDB";

$("#btnExe").on("click", function () {
  DbOpen(function (db) {
    console.log("version:" + db.version);

    let customerObjectStoreReq = db.transaction('testobj', 'readonly').objectStore('testobj');

    //$("#tbox").val("");
  });
});

$("#btnDelete").on("click", function () {
  DbDelete();
});


function DbOpen(callback ) {
  let openReq = indexedDB.open(dbName);

  openReq.onerror = function (event) {
    console.log("db open error");
  };

  openReq.onupgradeneeded = function (event) {
    console.log("db upgraded");
  };

  openReq.onsuccess = function (event) {
    console.log("db opened");
    let db = event.target.result;

    callback(db);

    db.close();
  };
}

function DbDelete() {
  deleteReq = indexedDB.deleteDatabase(dbName);

  deleteReq.onsuccess = function (event) {
    console.log("db deleted");
  };

  deleteReq.onerror = function () {
    console.log("db delete error");
  };
}
