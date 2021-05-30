export default function homePage() {
  const homeSection = document.createElement('div');
  homeSection.classList.add('p-3', 'm-3');
  homeSection.innerHTML = `
    <div>
      <h1>Tasty Resturant</h1>
      <small class="text-muted">Just like grandma used to make.</small>
    </div>
      <h3 class="font-weight-bolder">Opening Hours</h3>

      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">Days</li>
        <li class="list-group-item">Morning </li>
        <li class="list-group-item">Evening</li>
      </ul>
      <ul class="list-group list-group-horizontal-sm">
        <li class="list-group-item">Monday</li>
        <li class="list-group-item">7am - 12:00pm</li>
        <li class="list-group-item">4:00pm - 10:00pm</li>
      </ul>
      <ul class="list-group list-group-horizontal-md">
        <li class="list-group-item">Tuesday</li>
        <li class="list-group-item">10am - 2:00pm</li>
        <li class="list-group-item">4:00pm - 10:00pm</li>
      </ul>
      <ul class="list-group list-group-horizontal-lg">
        <li class="list-group-item">Wednesday</li>
        <li class="list-group-item">9am - 12:00pm</li>
        <li class="list-group-item">2:00pm - 10:00pm</li>
      </ul>
      <ul class="list-group list-group-horizontal-xl">
        <li class="list-group-item">Saturday</li>
        <li class="list-group-item">7am - 12:00pm</li>
        <li class="list-group-item">1:00pm - 10:00pm</li>
      </ul>`
  return homeSection;
}