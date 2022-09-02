let button = document.createElement("button");
button.innerText = "Get Data";
button.classList.add("button");
let mainDiv = document.getElementById("mainDiv");
let table = document.getElementById("table");
mainDiv.append(button);

button.addEventListener("click", () => {
  async function getSettings() {
    return await fetch("/Data/Settings.json")
      .then((settingsData) => settingsData.json())
      .then((data) => data);
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
      if (showDescription) {
        let tr = document.createElement("tr");
        let idList = document.createElement("td");
        let nameList = document.createElement("td");
        let descriptionList = document.createElement("td");
        let statusList = document.createElement("td");
        idList.append(elem.id);
        nameList.append(elem.name);
        descriptionList.append(elem.description);
        statusList.append(elem.status);
        tr.append(idList, nameList, descriptionList, statusList);
        table.append(tr);
        return elem;
      } else {
        elem.description = "N/A";
        let tr = document.createElement("tr");
        let idList = document.createElement("td");
        let nameList = document.createElement("td");
        let descriptionList = document.createElement("td");
        let statusList = document.createElement("td");
        idList.append(elem.id);
        nameList.append(elem.name);
        descriptionList.append(elem.description);
        statusList.append(elem.status);
        tr.append(idList, nameList, descriptionList, statusList);
        table.append(tr);
        return elem;
      }
    });
  }

  getFullData();
  button.style.display = "none";
});
