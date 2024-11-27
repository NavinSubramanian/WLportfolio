const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');
const warning = document.getElementById('warningTag');

console.log(projects)

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((button) => button.classList.remove('active'));

    btn.classList.add('active');

    const category = btn.getAttribute('data-category');
    let count = 0;
    projects.forEach((project) => {
      const projectCategory = project.getAttribute('data-category');

      if (category === 'all' || projectCategory === category) {
        project.style.display = 'block';
        count++;
      } else {
        project.style.display = 'none';
      }
    });
    if(count === 0){
      warning.textContent="No Projects present currently";
    }else{
      warning.textContent="";
    }
  });
});


function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}