let submit = document.getElementById("sbm");
let number = document.getElementById("num");
let showCount = document.createElement("div");
let remove = document.createElement("button");
remove.classList.add("remove");

function deleteAllTables() {
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
}

submit.addEventListener("click", () => {
  deleteAllTables();
  let count = +number.value;
  async function getSettings() {
    return await fetch("/Data/Settings.json")
      .then((settingsData) => settingsData.json())
      .then((data) => {
        if (count) {
          data.find((elem) => elem.name === "max_items_to_show").value = count;
        }
        return data;
      });
  }
  async function getEmployees() {
    return await fetch("/Data/Employees.json")
      .then((employeesData) => employeesData.json())
      .then((data) => data);
  }

  async function getFullData() {
    let settings = await getSettings();
    let employeesResponse = await getEmployees();
    let active = settings.find(
      (elem) => elem.name === "show_only_active"
    ).value;

    let employeesArr = employeesResponse.filter(
      (employees) => employees.status === active
    );

    let maxItems = settings.find(
      (elem) => elem.name === "max_items_to_show"
    ).value;

    employeesArr = employeesArr.filter(
      (elem) => employeesArr.indexOf(elem) < maxItems
    );

    let showDescription = settings.find(
      (elem) => elem.name === "show_description"
    ).value;

    employeesArr = employeesArr.map((elem) => {
      table.style.display = "table";

      if (showDescription === true) {
        let tr = document.createElement("tr");
        let idList = document.createElement("td");
        let nameList = document.createElement("td");
        let descriptionList = document.createElement("td");
        let statusList = document.createElement("td");
        let remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerText = "x";
        tr.append(remove);
        idList.append(elem.id);
        nameList.append(elem.name);
        descriptionList.append(elem.description);
        statusList.append(elem.status);
        tr.append(idList, nameList, descriptionList, statusList);
        table.append(tr)

        remove.addEventListener("click", () => {
          remove.parentElement.remove()})

      return elem
    } 
    

      else if (showDescription === false) {
        elem.description = "N/A";
        let tr = document.createElement("tr");
        let idList = document.createElement("td");
        let nameList = document.createElement("td");
        let descriptionList = document.createElement("td");
        let statusList = document.createElement("td");
        let remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerText = "x";
        tr.append(remove);
        idList.append(elem.id);
        nameList.append(elem.name);
        descriptionList.append(elem.description);
        statusList.append(elem.status);
        tr.append(idList, nameList, descriptionList, statusList);
        table.append(tr)

        remove.addEventListener("click", () => {
          remove.parentElement.remove()})

      return elem
    }

  });
}
getFullData();
});