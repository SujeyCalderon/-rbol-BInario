import Product from "../models/Product.js";
import { bst } from "./dependencies.js";

let btnInsert = document.getElementById("insert");
let btnSearch = document.getElementById("search-btn");
let btnMin = document.getElementById("min");
let btnMax = document.getElementById("max");
let btnPrint = document.getElementById("print");

btnInsert.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let price = parseFloat(document.getElementById("price").value);
    let product = new Product(name, quantity, price);
    let data = bst.add(product);
    if (data) {
        Swal.fire("Producto registrado");
    } else {
        Swal.fire("No se pudo registrar el producto");
    }
});

btnSearch.addEventListener("click", () => {
    let quantity = parseInt(document.getElementById("searchProduct").value);
    let product = bst.search(quantity);
    if (product) {
        Swal.fire(`Producto encontrado: ${product.name}, Cantidad: ${product.quantity}, Precio: ${product.price}`);
    } else {
        Swal.fire("El producto no se encuentra en la lista");
    }
});

btnMin.addEventListener("click", () => {
    let product = bst.min();
    if (product) {
        Swal.fire(`El producto con menor cantidad es: ${product.name}, Cantidad: ${product.quantity}, Precio: ${product.price}`);
    } else {
        Swal.fire("No hay productos en la lista");
    }
});

btnMax.addEventListener("click", () => {
    let product = bst.max();
    if (product) {
        Swal.fire(`El producto con mayor cantidad es: ${product.name}, Cantidad: ${product.quantity}, Precio: ${product.price}`);
    } else {
        Swal.fire("No hay productos en la lista");
    }
});

btnPrint.addEventListener("click", () => {
    let productsTable = document.getElementById("div");
    productsTable.innerHTML = "";
    bst.inOrderTraversal((product) => {
        let productRow = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        let quantityCell = document.createElement("td");
        quantityCell.textContent = product.quantity;
        let priceCell = document.createElement("td");
        priceCell.textContent = product.price;
        productRow.appendChild(nameCell);
        productRow.appendChild(quantityCell);
        productRow.appendChild(priceCell);
        productsTable.appendChild(productRow);
    });
});
