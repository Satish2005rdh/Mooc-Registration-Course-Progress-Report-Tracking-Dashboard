const progressCtx = document.getElementById('progressChart').getContext('2d');
const submissionCtx = document.getElementById('submissionChart').getContext('2d');

const progressChart = new Chart(progressCtx, {
  type: 'bar',
  data: {
    labels: ['Machine Learning', 'Data Structures', 'Computer Networks', 'Web Development', 'Python Programming'],
    datasets: [{
      label: 'Course Progress (%)',
      data: [65, 40, 85, 100, 100],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(124, 58, 237, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(245, 158, 11, 0.7)'
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(124, 58, 237, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(245, 158, 11, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

const submissionChart = new Chart(submissionCtx, {
  type: 'doughnut',
  data: {
    labels: ['Submitted', 'Pending', 'Late', 'Verified'],
    datasets: [{
      data: [18, 2, 1, 15],
      backgroundColor: [
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(59, 130, 246, 0.7)'
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(59, 130, 246, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

// Sidebar Toggle
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleSidebarBtn.addEventListener('click', () => {
  if (sidebar.classList.contains('w-64')) {
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-16');
    mainContent.classList.add('ml-16');
    
    // Hide text in sidebar
    document.querySelectorAll('.sidebar span').forEach(item => {
      item.classList.add('hidden');
    });
    
    // Center icons
    document.querySelectorAll('.sidebar a').forEach(item => {
      item.classList.add('justify-center');
      item.classList.remove('justify-start');
    });
    
    // Hide logo text
    document.querySelector('.sidebar h1').classList.add('hidden');
  } else {
    sidebar.classList.remove('w-16');
    sidebar.classList.add('w-64');
    mainContent.classList.remove('ml-16');
    
    // Show text in sidebar
    document.querySelectorAll('.sidebar span').forEach(item => {
      item.classList.remove('hidden');
    });
    
    // Align items to start
    document.querySelectorAll('.sidebar a').forEach(item => {
      item.classList.remove('justify-center');
      item.classList.add('justify-start');
    });
    
    // Show logo text
    document.querySelector('.sidebar h1').classList.remove('hidden');
  }
});

// Dark Mode Toggle
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;
const moonIcon = toggleThemeBtn.querySelector('i');

toggleThemeBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    moonIcon.classList.remove('fa-sun');
    moonIcon.classList.add('fa-moon');
  } else {
    body.classList.add('dark-mode');
    moonIcon.classList.remove('fa-moon');
    moonIcon.classList.add('fa-sun');
  }
});
