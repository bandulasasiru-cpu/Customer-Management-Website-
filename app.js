const customerList = [];

function addCustomer() {

    let customerId = document.getElementById("txtId").value;
    let customerName = document.getElementById("txtName").value;
    let customerAge = document.getElementById("txtAge").value;
    let customerAddress = document.getElementById("txtAddress").value;
    let customerSalary = document.getElementById("txtSalary").value;

    if (customerId === "" || customerName === "" ||
        customerAge === "" || customerAddress === "" ||
        customerSalary === "") {

        alert("Please fill all customer details!");
        return;
    }

    let customer = {
        id: customerId,
        name: customerName,
        age: customerAge,
        address: customerAddress,
        salary: customerSalary
    };

    customerList.push(customer);

    console.log(customerList);

    loadCustomerTable();

    document.getElementById("txtId").value = "";
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtSalary").value = "";

}

function loadCustomerTable() {

    let body = "";

    for (let customer of customerList) {

        body += `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.age}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
            </tr>
        `;

    }

    document.getElementById("tblCustomer").innerHTML = body;

}