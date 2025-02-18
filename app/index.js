import * as bootstrap from "bootstrap";
import './index.scss';

// 
document.addEventListener("DOMContentLoaded", () => {

    // Tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popover
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });

    // Toast
    const toastElList = [].slice.call(document.querySelectorAll('.toast'));
    toastElList.forEach(toastEl => {
        new bootstrap.Toast(toastEl).show(); // Mostra automaticamente os toasts
    });

    // Dropdown
    const dropdownList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownList.forEach(dropdownEl => {
        new bootstrap.Dropdown(dropdownEl);
    });

    // 

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
    const studentTable = document.getElementById("student-table");
    if (studentTable) {
        const students = [
            { code: "101", name: "John Doe", course: "Computer Science", dob: "2000-05-15" },
            { code: "102", name: "Jane Smith", course: "Engineering", dob: "1999-07-20" },
            { code: "103", name: "Alice Johnson", course: "Mathematics", dob: "2001-03-10" },
            { code: "104", name: "Bob Brown", course: "Physics", dob: "1998-12-05" },
            { code: "105", name: "Charlie White", course: "Chemistry", dob: "2002-06-25" }
        ];

        students.forEach(student => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.code}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.dob}</td>
                <td>
                    <button class="btn btn-primary btn-sm">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            `;
            studentTable.appendChild(row);
        });
    }
});