export default function homePage() {
  const homeSection = document.createElement('div');
  homeSection.classList.add('p-3', 'm-3');
  homeSection.innerHTML = `
    <div>
      <small class="text-white">Just like grandma used to make.</small>
    </div>
      <h3 class="font-weight-bolder text-white">Opening Hours</h3>

      <ul class="row list-group list-group-horizontal">
        <li class="list-group-item col col-md-3">Days</li>
        <li class="list-group-item col col-md-3">Morning </li>
        <li class="list-group-item col col-md-3">Evening</li>
      </ul>
      <ul class="row list-group list-group-horizontal">
        <li class="list-group-item col col-md-3">Monday</li>
        <li class="list-group-item col col-md-3">7am - 12:00pm</li>
        <li class="list-group-item col col-md-3">4:00pm - 10:00pm</li>
      </ul>
      <ul class="row list-group list-group-horizontal">
        <li class="list-group-item col col-md-3">Tuesday</li>
        <li class="list-group-item col col-md-3">10am - 2:00pm</li>
        <li class="list-group-item col col-md-3">4:00pm - 10:00pm</li>
      </ul>
      <ul class="row list-group list-group-horizontal">
        <li class="list-group-item col col-md-3">Wednesday</li>
        <li class="list-group-item col col-md-3">9am - 12:00pm</li>
        <li class="list-group-item col col-md-3">2:00pm - 10:00pm</li>
      </ul>
      <ul class="row list-group list-group-horizontal">
        <li class="list-group-item col col-md-3">Saturday</li>
        <li class="list-group-item col col-md-3">7am - 12:00pm</li>
        <li class="list-group-item col col-md-3">1:00pm - 10:00pm</li>
      </ul>`;
  return homeSection;
}