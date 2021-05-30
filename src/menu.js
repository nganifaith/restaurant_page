export default function menuPage() {
  const menuSection = document.createElement('div');
  menuSection.classList.add('d-flex', 'flex-wrap');
  menuSection.innerHTML = `
    <div class="card col-md-6">
      <img src="https://i0.wp.com/www.hacc-sarl.com/wp-content/uploads/2020/05/Ndole9-2368068041-1588932049892.jpg?resize=840%2C550" class="card-img-top" alt="Ndole">
        <div class="card-body">
          <h5 class="card-title">Ndole and Plantins</h5>
          <p class="card-text font-weight-normal ">Ripe nodle and plantains, Ndole can also be taken with fried ripe plantains or rice. It it accompanied with either Red Meat, Fish or Chicken.</p>
          <a href="#" class="btn btn-primary">Place Order</a>
        </div>
      </div>
      <div class="card col-md-6">
        <img src="https://i.ytimg.com/vi/oYfhHX5N5BY/maxresdefault.jpg" class="card-img-top" alt="Khatti Khatti">
        <div class="card-body">
          <h5 class="card-title">Fufu Corn and Khatti Khatti</h5>
          <p class="card-text font-weight-normal">Prepared in the most traditional way. Chicken is roasted over charcoal put with feathers.</p>
          <a href="#" class="btn btn-primary">Palce order</a>
        </div>
      </div>
      <div class="card col-md-6">
        <img src="https://i0.wp.com/queenmafa.net/wp-content/uploads/2019/08/S10.jpg?resize=600%2C337&ssl=1" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Water Fufu and Eru</h5>
          <p class="card-text font-weight-normal">Prepared on special order. Can be gotten with either white or red garri</p>
          <a href="#" class="btn btn-primary">Place order</a>
        </div>
      </div>
      <div class="card col-md-6">
        <img src="https://www.miyalounge.com/wp-content/uploads/2018/07/Achu-miyalounge.jpeg" class="card-img-top" alt="achu">
        <div class="card-body">
          <h5 class="card-title">Achu and Yello SOup</h5>
          <p class="card-text font-weight-normal">This meal is available only on special order. Place command a day before</p>
          <a href="#" class="btn btn-primary">Place order</a>
        </div>
      </div>
  `;
  return menuSection;
}