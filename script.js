document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a to do");
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task">
        <span id="taskname">
          ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newtask input").value = "";
  }
};
