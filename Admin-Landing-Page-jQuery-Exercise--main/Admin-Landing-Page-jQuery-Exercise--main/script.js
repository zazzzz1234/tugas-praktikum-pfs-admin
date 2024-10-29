$(document).ready(function() {
    // Sidebar functionality
    const $sidebar = $('.sidebar');
    const $mainContent = $('.main-content');
    const $menuIcon = $('.menu-icon');
    const $logoName = $('.logo-name');
    const $menuItemText = $('.menu-item-text');
    const sidebarWidth = 220;
    const collapsedWidth = 60;
    let sidebarCollapsed = false;

    function toggleSidebar() {
        if (sidebarCollapsed) {
            expandSidebar();
        } else {
            collapseSidebar();
        }
        sidebarCollapsed = !sidebarCollapsed;
    }

    function collapseSidebar() {
        $sidebar.animate({ width: collapsedWidth }, 300);
        $mainContent.animate({ marginLeft: collapsedWidth }, 300);
        $menuItemText.fadeOut(300);
        $logoName.fadeOut(300);
    }

    function expandSidebar() {
        $sidebar.animate({ width: sidebarWidth }, 300);
        $mainContent.animate({ marginLeft: sidebarWidth }, 300);
        $menuItemText.fadeIn(300);
        $logoName.fadeIn(300);
    }

    // Initial setup
    $sidebar.css({
        'width': sidebarWidth,
        'top': '0',
        'left': '0',
        'bottom': '0',
        'position': 'fixed'
    });
    $mainContent.css('marginLeft', sidebarWidth);

    // Move menu icon inside sidebar next to logo
    $menuIcon.prependTo($sidebar.find('.logo'));

    // Toggle sidebar on hamburger click
    $menuIcon.click(toggleSidebar);

    // Expand sidebar on hover when collapsed
    $sidebar.hover(
        function() {
            if (sidebarCollapsed) {
                expandSidebar();
            }
        },
        function() {
            if (sidebarCollapsed) {
                collapseSidebar();
            }
        }
    );

    // Efek Fade In untuk card saat halaman di-load
    $('.card').each(function(index) {
        var $card = $(this);
        setTimeout(function() {
            $card.addClass('animate');
        }, 100 * index);
    });

    // Efek Slide Toggle untuk dropdown menu
    $('.dropdown').click(function() {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    // Efek Fade In/Fade Out untuk chart dan budget container
    $('.chart, .budget-container').hover(
        function() {
            $(this).fadeTo(300, 0.7);  // Fade out saat hover
        },
        function() {
            $(this).fadeTo(300, 1);  // Fade in saat hover berakhir
        }
    );

    // Efek animasi sederhana pada logo
    $('.logo-name').hover(function() {
        $(this).animate({
            fontSize: '30px',  // Animasi perubahan ukuran teks
        }, 400);
    }, function() {
        $(this).animate({
            fontSize: '24px',  // Kembali ke ukuran asli
        }, 400);
    });

    // Efek Show/Hide pada profil
    $('.profile-icon').click(function() {
        $(this).find('img').toggle(500);  // Gambar akan hilang/muncul saat diklik
    });
    
    // Bar chart initialization (Chart.js)
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie chart initialization (Chart.js)
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    const myPieChart1 = new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    const myPieChart2 = new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}); 