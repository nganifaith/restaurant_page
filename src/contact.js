export function contactPage() {
  let contactSection = document.createElement('div');
  contactSection.classList.add('col-9', 'm-auto', 'pt-5');
  contactSection.innerHTML = `
    <form>
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" class="form-control" id="name" placeholder="John Doe">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com">
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button class="btn btn-primary" type="submit">Send</button>
      </form>
  `;
  return contactSection
}