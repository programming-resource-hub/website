
export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contact Us</h2>
                <div className='col-md-12'>
                  <div className='row'>
                    <div className='social'>
                      <ul>
                        {/* <li>
                          <a href={props.data ? props.data.facebook : '/'}>
                            <i className='fa fa-facebook'></i>
                          </a>
                        </li>
                        <li>
                          <a href={props.data ? props.data.twitter : '/'}>
                            <i className='fa fa-twitter'></i>
                          </a>
                        </li>
                        <li>
                          <a href={props.data ? props.data.youtube : '/'}>
                            <i className='fa fa-youtube'></i>
                          </a>
                        </li>
                        <li>
                          <a href={props.data ? props.data.youtube : '/'}>
                            <i className='fa fa-medium'></i>
                          </a>
                        </li>
                        <li>
                          <a href={props.data ? props.data.youtube : '/'}>
                            <i className='fa fa-linkedin'></i>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="https://www.facebook.com/dillylabs">
                            <i className='fa fa-facebook'></i>
                          </a>
                        </li> */}
                        <li>
                          <a href='https://www.instagram.com/'>
                            <i className='fa fa-instagram'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/'>
                            <i className='fa fa-twitter'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.youtube.com/channel/UCWj0is0hzWtlNUV3X0F5pNQ'>
                            <i className='fa fa-youtube'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://medium.com/@dillylabz'>
                            <i className='fa fa-medium'></i>
                          </a>
                        </li>
                        {/* <li>
                          <a href='https://www.linkedin.com/in/dilly-labs-828506253/'>
                            <i className='fa fa-linkedin'></i>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div> */}

        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 dillyLabs.
            {/* Design by{' '} */}
            {/* <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  )
}
