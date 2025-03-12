export default function StillRecord() {
  return (
    <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
      <div className="md:col-span-6 col-span-12 mb-4">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div className="md:col-span-6 col-span-12 mb-4">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
      <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
        <label className="form-label">Address</label>
        <div className="grid grid-cols-12 sm:gap-x-4">
          <div className="xl:col-span-12 col-span-12 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Street"
              aria-label="Street"
            />
          </div>
          <div className="xl:col-span-12 col-span-12 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Landmark"
              aria-label="Landmark"
            />
          </div>
          <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="City"
            />
          </div>
          <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
            <select id="inputState1" className="form-select !py-[0.59rem]">
              <option className="selected">State</option>
              <option>...</option>
            </select>
          </div>
          <div className="xxl:col-span-6 xl:col-span-12 col-span-12 xxl:mb-0 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Postal/Zip code"
              aria-label="Postal/Zip code"
            />
          </div>
          <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
            <select id="inputCountry" className="form-select !py-[0.59rem]">
              <option className="selected">Country</option>
              <option>...</option>
            </select>
          </div>
        </div>
      </div>
      <div className="md:col-span-6  col-span-12">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-12 col-span-12 mb-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="email"
            />
          </div>
          <div className="xl:col-span-12 col-span-12 mb-4">
            <label className="form-label">D.O.B</label>
            <input
              type="date"
              className="form-control"
              aria-label="dateofbirth"
            />
          </div>
          <div className="xl:col-span-12 col-span-12 mb-4">
            <div className="grid grid-cols-12 gap-3">
              <label className="form-label mb-1 xl:col-span-12 col-span-12">
                Maritial Status
              </label>
              <div className="xl:col-span-6 col-span-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultValue=""
                    id="status-married"
                    name="status-married"
                  />
                  <label className="form-check-label" htmlFor="status-married">
                    Married
                  </label>
                </div>
              </div>
              <div className="xl:col-span-6 col-span-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultValue=""
                    id="status-unmarried"
                    name="status-married"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="status-unmarried"
                  >
                    Single
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-12 col-span-12"></div>
        </div>
      </div>
      <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
        <label className="form-label">Contact Number</label>
        <input
          type="number"
          className="form-control"
          placeholder="Phone number"
          aria-label="Phone number"
        />
      </div>
      <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
        <label className="form-label">Alternative Contact</label>
        <input
          type="number"
          className="form-control"
          placeholder="Phone number"
          aria-label="Phone number"
        />
      </div>
      <div className="md:col-span-12 col-span-12 mb-4 sm:mb-0">
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="md:col-span-12 col-span-12">
        <button type="submit" className="ti-btn ti-btn-primary-full !mb-0">
          Sign in
        </button>
      </div>
    </div>
  );
}
