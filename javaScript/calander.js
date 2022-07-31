const calenderSide = document.querySelector("#calender-side");
const calenderButton = document.querySelector("#calender-button");

let calendarStorage = [];
function saveCalStorage() {
  window.localStorage.setItem("calendar", JSON.stringify(calendarStorage));
}

function openCalSidebar() {
  closeTodoSideBar();
  calenderSide.style.transform = "translateX(-16px)";
  calenderButton.removeEventListener("click", openCalSidebar);
  calenderButton.addEventListener("click", closeCalSideBar);
}

function closeCalSideBar() {
  calenderSide.style.transform = "translateX(100%)";
  calenderButton.removeEventListener("click", closeCalSideBar);
  calenderButton.addEventListener("click", openCalSidebar);
}

function calendarInit(events) {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    height: "700px", // calendar 높이 설정
    expandRows: true, // 화면에 맞게 높이 재설정
    slotMinTime: "08:00", // Day 캘린더에서 시작 시간
    slotMaxTime: "20:00", // Day 캘린더에서 종료 시간

    // 해더에 표시할 툴바
    headerToolbar: {
      left: "prev,next,today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    initialView: "dayGridMonth", // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
    //   initialDate: "2021-07-15", // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
    navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
    editable: true, // 수정 가능?]
    selectable: true, // 달력 일자 드래그 설정가능
    nowIndicator: true, // 현재 시간 마크
    dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
    locale: "ko", // 한국어 설정
    eventAdd: function (obj) {
      // 이벤트가 추가되면 발생하는 이벤트
      console.log(obj);
      calendarStorage.push(obj.event);
      saveCalStorage();
    },
    eventChange: function (obj) {
      // 이벤트가 수정되면 발생하는 이벤트
      console.log(obj);
    },
    eventRemove: function (obj) {
      // 이벤트가 삭제되면 발생하는 이벤트
      console.log(obj);
    },
    select: function (arg) {
      // 캘린더에서 드래그로 이벤트를 생성할 수 있다.
      var title = prompt("Event Title:");
      if (title) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay,
        });
      }
      calendar.unselect();
    },
    events: events,
  });
  calendar.render();
}

let events;
const savedCalendar = localStorage.getItem("calendar");
if (savedCalendar) {
  const initialCalendar = JSON.parse(savedCalendar);
  calendarStorage = initialCalendar;
  events = initialCalendar;
}

calendarInit(events);
calenderButton.addEventListener("click", openCalSidebar);
