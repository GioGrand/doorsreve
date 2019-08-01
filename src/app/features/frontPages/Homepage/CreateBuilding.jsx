import React ,{useState} from "react";
import ReactLoading from "react-loading";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

function CreateBuilding(props) {
  const [address, setAddress] = useState("");

 const handleSelect = async address => {
  setAddress(address)
    console.log(address);
    const addressObject = await geocodeByAddress(address);
    console.log(addressObject[0].address_components);
    const latLng = await getLatLng(addressObject[0]);
    console.log(latLng)
  };

  return (
    <section class='has-divider'>
      <div class='container'>
        <div class='row align-items-center justify-content-between'>
          <div
            class='col-md-5 order-sm-2 mb-5 mb-sm-0 aos-init aos-animate'
            data-aos='fade-left'
          >
            <img src='assets/img/saas-3.svg' alt='Image' />
          </div>
          <div class='col-md-7 pr-xl-5 order-sm-1'>
            <h1 class='display-4'>Build it with Leap</h1>
            <p class='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <form class='d-sm-flex mb-2 mt-4'>
              <PlacesAutocomplete
               value={address}
               onChange={event => setAddress(event)}
               onSelect={handleSelect}
                searchOptions={{
                  componentRestrictions: { country: ["uk"] },
                  types: ["address"]
                }}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div className='form-group mr-sm-2 mb-2 mb-sm-0 w-100'>
                    <input
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        autoFocus: true,
                        className:
                          "form-control form-control-lg mr-sm-2 mb-2 mb-sm-0"
                      })}
                    />
                    <ul
                      class='list-group'
                      style={{
                        zIndex: 2000,
                        position: "absolute",
                        width: "100%",
                        fontFamily: "inherit"
                      }}
                    >
                      {suggestions.map(suggestion => {
                        return (
                          <li
                            {...getSuggestionItemProps(suggestion, {})}
                            class='list-group-item'
                            style={{ cursor: "pointer" }}
                          >
                            <div>
                              {" "}
                              {suggestion.formattedSuggestion.mainText}
                            </div>

                            {suggestion.formattedSuggestion.secondaryText}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </PlacesAutocomplete>

              {/* 
                <Field
                  name='projectName'
                  component='input'
                  type='text'
                  placeholder='Project name'
                  className='form-control form-control-lg mr-sm-2 mb-2 mb-sm-0'
                />
 */}

              <button class='btn btn-lg btn-primary' type='submit'>
                "Find you building"
              </button>
            </form>
            <span class='text-small text-muted'>
              Already using Leap? <a href='#'>Sign In</a>
            </span>
          </div>
        </div>
      </div>
      <div class='divider'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='100%'
          height='96px'
          viewBox='0 0 100 100'
          version='1.1'
          preserveAspectRatio='none'
          class='injected-svg bg-primary-alt'
          data-src='assets/img/dividers/divider-3.svg'
        >
          <path d='M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100' />
        </svg>
      </div>
    </section>
  );
}

export default CreateBuilding;
