let inputDom = document.getElementById("task");
let ulDom = document.getElementById("list");
let inputBtnDom = document.getElementById("liveToastBtn"); //input butonu

//??????????
const closeIcon = `<span class="close" onclick="deleteTask(this.parentNode)" aria-label="Close" aria-hidden="true">&times;</span>`;

let newElement = () => {
  //asagıdaki trim metodunu arastır su an ezbere olmus oldu fakat tam ıstedıgım seyı verdı
  if (!inputDom.value || inputDom.value.trim() === "") {
    alert("Lütfen boş bırakmayınız");
    inputDom.value = "";
  } else {
    let liDom = document.createElement("li"); //li etiketinde bir element üretip bunu liDom'a aktardık.

    liDom.innerHTML = inputDom.value + closeIcon; //liDom'un icerisine bilgi olarak inputtan aldıgımız veriyi atadık
    //şimdi geriye ulDom'un ıcıne liDom'umumuzu eklemek kaldı
    ulDom.append(liDom);

    inputDom.value = "";

    liDom.addEventListener("click", toggleTask);
  }
};

function toggleTask() {
  this.classList.toggle("checked");
}

//???????????
function deleteTask(params) {
  params.remove();
}

/*
let savedTasks = [];
const defaultTasks = [
  "3 Litre Su İç",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
  "50 Sayfa Kitap Oku",
];
const taskList = document.querySelector("#list");
const taskInput = document.querySelector("#task");

const closeIcon = `<span class="close" onclick="deleteTask(this.parentNode)" aria-label="Close" aria-hidden="true">&times;</span>`;

// İlk açılışta veya hiç yapılacak iş bırakılmadığında varsayılan görevleri ekleme
if (
  localStorage.getItem("savedTasks") === null ||
  localStorage.getItem("savedTasks").length === 2
) {
  defaultTasks.forEach((task) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${task}${closeIcon}`;
    listItem.addEventListener("click", toggleTask);
    savedTasks.push(listItem.innerHTML);
    taskList.append(listItem);
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  });
}
// Eğer Local Storage dolu ise kayıtlı görevleri yükleme
else {
  savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
  savedTasks.forEach((task) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${task}`;
    listItem.addEventListener("click", toggleTask);
    taskList.append(listItem);
  });
}

// Tıklanan görevin işaretlenmesini değiştirme fonksiyonu
function toggleTask() {
  this.classList.toggle("checked");
}

// Yeni görev ekleme fonksiyonu
function addTask() {
  // Boş görev veya boş karakter eklenmesini engelleme
  if (taskInput.value.length > 0 && !(taskInput.value.trim().length === 0)) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskInput.value}${closeIcon}`;
    listItem.addEventListener("click", toggleTask);
    taskList.append(listItem);
    savedTasks.push(listItem.innerHTML);
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    $(".success").toast("show");
    taskInput.value = "";
  } else {
    $(".error").toast("show");
    taskInput.value = "";
  }
}

// Kayıtlı görevi silme fonksiyonu
function deleteTask(parentNode) {
  savedTasks.splice(savedTasks.indexOf(parentNode.innerHTML), 1);
  localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  parentNode.remove();
}

*/
