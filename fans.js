const new_post = document.getElementById("new-feedback");
const text_area = document.getElementById("text-area");

function add_mess() {
    if(text_area.value.trim() !== "") {
        new_post.innerHTML += `<div class="user_message">
            <h3>${text_area.value}</h3>
            <div class="user_data">
          <div class="user_info">
            <p>
              10.10.2018, 20:33
            </p>
          </div>
          <div class="user_nick">
            <p>
              FootballFan
            </p>
          </div>
        </div>
      </div>
        </div>`;
        text_area.value = "";
    } else {
        alert("Type something")
    }
}