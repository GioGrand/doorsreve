import React, { Component } from "react";
import CreateBuilding from "./CreateBuilding";

function HomePage(props) {
  return (
    <React.Fragment>
      {/*    <NavExternal /> */}
      <div>
        <CreateBuilding />
        <section className='bg-primary-alt'>
          <div className='container'>
            <div className='row mb-4'>
              <div className='col'>
                <h2 className='h1'>Multiple layouts for your SaaS</h2>
              </div>
            </div>
            <div className='row'>
              <div
                className='col-md-4 aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <div className='card card-body'>
                  <div className='icon-round mb-3 mb-md-4 bg-primary'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='24px'
                      height='24px'
                      viewBox='0 0 24 24'
                      version='1.1'
                      className='injected-svg icon bg-primary'
                      data-src='assets/img/icons/theme/communication/chat-check.svg'
                    >
                      <title>Icon For Chat-check</title>
                      <g
                        stroke='none'
                        stroke-width='1'
                        fill='none'
                        fill-rule='evenodd'
                      >
                        <rect opacity='0' x='0' y='0' width='24' height='24' />
                        <path
                          d='M4.875,20.75 C4.63541667,20.75 4.39583333,20.6541667 4.20416667,20.4625 L2.2875,18.5458333 C1.90416667,18.1625 1.90416667,17.5875 2.2875,17.2041667 C2.67083333,16.8208333 3.29375,16.8208333 3.62916667,17.2041667 L4.875,18.45 L8.0375,15.2875 C8.42083333,14.9041667 8.99583333,14.9041667 9.37916667,15.2875 C9.7625,15.6708333 9.7625,16.2458333 9.37916667,16.6291667 L5.54583333,20.4625 C5.35416667,20.6541667 5.11458333,20.75 4.875,20.75 Z'
                          fill='#000000'
                          fill-rule='nonzero'
                          opacity='0.3'
                        />
                        <path
                          d='M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z'
                          fill='#000000'
                        />
                      </g>
                    </svg>
                  </div>
                  <h4>Communication</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                  <a href='#'>Learn More</a>
                </div>
              </div>
              <div
                className='col-md-4 aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='card card-body'>
                  <div className='icon-round mb-3 mb-md-4 bg-primary'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='24px'
                      height='24px'
                      viewBox='0 0 24 24'
                      version='1.1'
                      class='injected-svg icon bg-primary'
                      data-src='assets/img/icons/theme/shopping/wallet-3.svg'
                    >
                      <title>Icon For Wallet#3</title>
                      <g
                        stroke='none'
                        stroke-width='1'
                        fill='none'
                        fill-rule='evenodd'
                      >
                        <rect opacity='0' x='0' y='0' width='24' height='24' />
                        <path
                          d='M4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 Z'
                          fill='#000000'
                          opacity='0.3'
                        />
                        <path
                          d='M18.5,11 L5.5,11 C4.67157288,11 4,11.6715729 4,12.5 L4,13 L8.58578644,13 C8.85100293,13 9.10535684,13.1053568 9.29289322,13.2928932 L10.2928932,14.2928932 C10.7456461,14.7456461 11.3597108,15 12,15 C12.6402892,15 13.2543539,14.7456461 13.7071068,14.2928932 L14.7071068,13.2928932 C14.8946432,13.1053568 15.1489971,13 15.4142136,13 L20,13 L20,12.5 C20,11.6715729 19.3284271,11 18.5,11 Z'
                          fill='#000000'
                        />
                        <path
                          d='M5.5,6 C4.67157288,6 4,6.67157288 4,7.5 L4,8 L20,8 L20,7.5 C20,6.67157288 19.3284271,6 18.5,6 L5.5,6 Z'
                          fill='#000000'
                        />
                      </g>
                    </svg>
                  </div>
                  <h4>Payments</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                  <a href='#'>Learn More</a>
                </div>
              </div>
              <div
                className='col-md-4 aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <div className='card card-body'>
                  <div className='icon-round mb-3 mb-md-4 bg-primary'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='24px'
                      height='24px'
                      viewBox='0 0 24 24'
                      version='1.1'
                      className='injected-svg icon bg-primary'
                      data-src='assets/img/icons/theme/food/sushi.svg'
                    >
                      <title>Icon For Sushi</title>
                      <g
                        stroke='none'
                        stroke-width='1'
                        fill='none'
                        fill-rule='evenodd'
                      >
                        <rect opacity='0' x='0' y='0' width='24' height='24' />
                        <path
                          d='M7,17 C9.28100068,17 11,15.9686004 11,15 C11,14.0313996 9.28100068,13 7,13 C4.71899932,13 3,14.0313996 3,15 C3,15.9686004 4.71899932,17 7,17 Z M11.5,21.3092376 C10.6896396,22.3100893 8.97910086,23 7,23 C4.23857625,23 2,21.6568542 2,20 C2,17.2642141 2,15.5975474 2,15 C2,13.3431458 4.23857625,12 7,12 C8.97910086,12 10.6896396,12.6899107 11.5,13.6907624 C12.3103604,12.6899107 14.0208991,12 16,12 C18.7614237,12 21,13.3431458 21,15 C21,15.3356863 21,17.0023529 21,20 C21,21.6568542 18.7614237,23 16,23 C14.0208991,23 12.3103604,22.3100893 11.5,21.3092376 Z M16,17 C18.2810007,17 20,15.9686004 20,15 C20,14.0313996 18.2810007,13 16,13 C13.7189993,13 12,14.0313996 12,15 C12,15.9686004 13.7189993,17 16,17 Z'
                          fill='#000000'
                          fill-rule='nonzero'
                        />
                        <path
                          d='M19.6608485,2.02106698 C19.8359854,2.52970126 19.5656323,3.08400728 19.056998,3.25914411 C19.0489211,3.2619252 19.040808,3.26459992 19.0326607,3.26716758 L2.33565766,8.52933019 C2.07027996,8.61296559 1.78658327,8.46994761 1.6959956,8.20686191 C1.60540793,7.94377622 1.74091331,7.65641538 2.00152489,7.55893815 L18.3986537,1.42587734 C18.9025046,1.23742064 19.4637309,1.49309823 19.6521876,1.99694922 C19.6551802,2.00495015 19.6580674,2.01299009 19.6608485,2.02106698 Z M20.9715106,6.55164469 C21.0649233,7.08141428 20.7111861,7.58660332 20.1814165,7.68001599 C20.173004,7.68149934 20.1645723,7.68287196 20.1561237,7.68413349 L2.84150489,10.2695234 C2.56631096,10.3106149 2.30848,10.1249778 2.26016328,9.85096006 C2.21184657,9.57694235 2.39063678,9.31431712 2.6632886,9.25880863 L19.8179636,5.76633204 C20.3450925,5.65901521 20.8594123,5.99934012 20.9667291,6.52646899 C20.9684333,6.53483956 20.9700272,6.54323218 20.9715106,6.55164469 Z M16,16 C15.1715729,16 14.5,15.5522847 14.5,15 C14.5,14.4477153 15.1715729,14 16,14 C16.8284271,14 17.5,14.4477153 17.5,15 C17.5,15.5522847 16.8284271,16 16,16 Z M7,16 C6.17157288,16 5.5,15.5522847 5.5,15 C5.5,14.4477153 6.17157288,14 7,14 C7.82842712,14 8.5,14.4477153 8.5,15 C8.5,15.5522847 7.82842712,16 7,16 Z'
                          fill='#000000'
                          opacity='0.3'
                        />
                      </g>
                    </svg>
                  </div>
                  <h4>Sushi</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                  <a href='#'>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='row justify-content-center text-center mb-5'>
              <div className='col-xl-8 col-lg-9'>
                <h2 className='display-4 mx-xl-6'>
                  Build it from the ground up.
                </h2>
                <p className='lead'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa.
                </p>
              </div>
            </div>
            <div className='row justify-content-center mb-5'>
              <div className='col-xl-11'>
                <ul className='nav justify-content-center' role='tablist'>
                  <li className='nav-item mx-1'>
                    <a
                      className='nav-link'
                      href='#saas-tab-1'
                      data-toggle='tab'
                      role='tab'
                      aria-controls='saas-tab-1'
                      aria-selected='false'
                    >
                      <div className='icon-round icon-round-sm bg-primary'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='injected-svg icon bg-primary'
                          data-src='assets/img/icons/theme/shopping/box-2.svg'
                        >
                          <title>Icon For Box#2</title>
                          <g
                            stroke='none'
                            stroke-width='1'
                            fill='none'
                            fill-rule='evenodd'
                          >
                            <rect
                              opacity='0'
                              x='0'
                              y='0'
                              width='24'
                              height='24'
                            />
                            <path
                              d='M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z'
                              fill='#000000'
                            />
                            <path
                              d='M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z'
                              fill='#000000'
                              opacity='0.3'
                            />
                          </g>
                        </svg>
                      </div>
                      Custom Dashboard
                    </a>
                  </li>
                  <li className='nav-item mx-1'>
                    <a
                      className='nav-link active'
                      href='#saas-tab-2'
                      data-toggle='tab'
                      role='tab'
                      aria-controls='saas-tab-2'
                      aria-selected='true'
                    >
                      <div className='icon-round icon-round-sm bg-primary'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='injected-svg icon bg-primary'
                          data-src='assets/img/icons/theme/shopping/chart-pie.svg'
                        >
                          <title>Icon For Chart-pie</title>
                          <g
                            stroke='none'
                            stroke-width='1'
                            fill='none'
                            fill-rule='evenodd'
                          >
                            <rect
                              opacity='0'
                              x='0'
                              y='0'
                              width='24'
                              height='24'
                            />
                            <path
                              d='M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z'
                              fill='#000000'
                              opacity='0.3'
                            />
                            <path
                              d='M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z'
                              fill='#000000'
                            />
                          </g>
                        </svg>
                      </div>
                      Smart Analytics
                    </a>
                  </li>
                  <li className='nav-item mx-1'>
                    <a
                      className='nav-link'
                      href='#saas-tab-3'
                      data-toggle='tab'
                      role='tab'
                      aria-controls='saas-tab-3'
                      aria-selected='false'
                    >
                      <div className='icon-round icon-round-sm bg-primary'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='injected-svg icon bg-primary'
                          data-src='assets/img/icons/theme/design/saturation.svg'
                        >
                          <title>Icon For Saturation</title>
                          <g
                            stroke='none'
                            stroke-width='1'
                            fill='none'
                            fill-rule='evenodd'
                          >
                            <rect
                              opacity='0'
                              x='0'
                              y='0'
                              width='24'
                              height='24'
                            />
                            <path
                              d='M7,14 C7,16.7614237 9.23857625,19 12,19 C14.7614237,19 17,16.7614237 17,14 C17,12.3742163 15.3702913,9.86852817 12,6.69922982 C8.62970872,9.86852817 7,12.3742163 7,14 Z M12,21 C8.13400675,21 5,17.8659932 5,14 C5,11.4226712 7.33333333,8.08933783 12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 Z'
                              fill='#000000'
                              fill-rule='nonzero'
                            />
                            <path
                              d='M12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 L12,4 Z'
                              fill='#000000'
                            />
                          </g>
                        </svg>
                      </div>
                      Dark Mode
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div
                className='col-xl-11 aos-init aos-animate'
                data-aos='fade-up'
              >
                <div className='tab-content'>
                  <div
                    className='tab-pane fade'
                    id='saas-tab-1'
                    role='tabpanel'
                    aria-labelledby='saas-tab-1'
                  >
                    <div className='popover-image'>
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "25%", left: "10%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some amazing content. It's very engaging. Right?"
                      />
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "10%", left: "90%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some amazing content. It's very engaging. Right?"
                      />
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "90%", left: "20%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some more amazing content. It's very engaging. Right?"
                      />
                      <img
                        src='assets/img/saas-1.jpg'
                        alt='Image'
                        className='rounded border shadow-lg'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade active show'
                    id='saas-tab-2'
                    role='tabpanel'
                    aria-labelledby='saas-tab-2'
                  >
                    <div className='popover-image'>
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "25%", left: "90%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some amazing content. It's very engaging. Right?"
                      />
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "90%", left: "10%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some amazing content. It's very engaging. Right?"
                      />
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "30%", left: "60%" }}
                        data-toggle='popover'
                        title=''
                        data-content="And here's some more amazing content. It's very engaging. Right?"
                        data-original-title='Hotspot title'
                      />
                      <img
                        src='assets/img/saas-2.jpg'
                        alt='Image'
                        className='rounded border shadow-lg'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='saas-tab-3'
                    role='tabpanel'
                    aria-labelledby='saas-tab-3'
                  >
                    <div className='popover-image'>
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "2%", left: "2%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some amazing content. It's very engaging. Right?"
                      />
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "35%", left: "95%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some amazing content. It's very engaging. Right?"
                      />
                      <div
                        className='popover-hotspot bg-primary-2'
                        style={{ top: "90%", left: "50%" }}
                        data-toggle='popover'
                        title='Hotspot title'
                        data-content="And here's some more amazing content. It's very engaging. Right?"
                      />
                      <img
                        src='assets/img/saas-3.jpg'
                        alt='Image'
                        className='rounded border shadow-lg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-primary-alt'>
          <div className='container'>
            <div className='row justify-content-between'>
              <div
                className='col-xl-5 col-lg-6 aos-init aos-animate'
                data-aos='fade-right'
              >
                <div className='row justify-content-center'>
                  <div className='col-md-8 col-lg mb-4 mb-lg-0'>
                    <img src='assets/img/saas-2.svg' alt='Image' />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <h3 className='h1'>Fits into your workflow</h3>
                <p className='lead'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
                <div className='row mt-5 o-hidden'>
                  <div
                    className='col-sm-6 aos-init aos-animate'
                    data-aos='fade-left'
                    data-aos-delay='100'
                  >
                    <a
                      href='#'
                      className='card card-sm card-body flex-row align-items-center hover-shadow-3d'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        className='injected-svg'
                        data-src='assets/img/logos/product/invision.svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <path
                          d='M43.6487 0H4.35131C1.94813 0 0 1.94813 0 4.35131V43.6487C0 46.0519 1.94813 48 4.35131 48H43.6487C46.0519 48 48 46.0519 48 43.6487V4.35131C48 1.94813 46.0519 0 43.6487 0Z'
                          fill='#DC395F'
                        />
                        <path
                          d='M16.0416 15.1022C17.6372 15.1022 18.9739 13.8516 18.9739 12.2124C18.9739 10.5744 17.6372 9.32401 16.0416 9.32401C14.446 9.32401 13.1096 10.5744 13.1096 12.2124C13.1096 13.8514 14.446 15.1022 16.0416 15.1022ZM9.96171 30.5747C9.7894 31.3078 9.70296 32.0994 9.70296 32.7452C9.70296 35.2898 11.0828 36.9789 14.0151 36.9789C16.447 36.9789 18.4185 35.5348 19.8381 33.2029L18.9713 36.6816H23.8003L26.5603 25.6118C27.2503 22.809 28.587 21.3542 30.6139 21.3542C32.2093 21.3542 33.201 22.3464 33.201 23.9844C33.201 24.459 33.1579 24.9759 32.9854 25.5368L31.5623 30.6249C31.3466 31.3581 31.2608 32.0916 31.2608 32.781C31.2608 35.1966 32.6833 36.9634 35.6588 36.9634C38.203 36.9634 40.2295 35.3256 41.3507 31.4014L39.4536 30.669C38.5048 33.2979 37.6855 33.7733 37.0386 33.7733C36.3917 33.7733 36.0467 33.3424 36.0467 32.4804C36.0467 32.0923 36.1333 31.6616 36.2623 31.143L37.6425 26.1859C37.9873 25.0219 38.1169 23.9897 38.1169 23.0413C38.1169 19.3329 35.8744 17.3976 33.1579 17.3976C30.6139 17.3976 28.0264 19.6924 26.733 22.1076L27.6814 17.7726H20.3081L19.2731 21.5908H22.723L20.5986 30.0958C18.9304 33.8042 15.8661 33.8644 15.4815 33.7783C14.85 33.6358 14.4461 33.396 14.4461 32.5755C14.4461 32.1021 14.5324 31.422 14.748 30.6021L17.9824 17.7726H9.78939L8.75439 21.5908H12.1607L9.96189 30.5747'
                          fill='white'
                        />
                      </svg>
                      <div className='ml-3'>
                        <h5 className='mb-0'>Invision</h5>
                        <span>Creative Tools</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className='col-sm-6 aos-init aos-animate'
                    data-aos='fade-left'
                    data-aos-delay='200'
                  >
                    <a
                      href='#'
                      className='card card-sm card-body flex-row align-items-center hover-shadow-3d'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        className='injected-svg'
                        data-src='assets/img/logos/product/dropbox.svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <path
                          d='M12 4L0 11.723L12 19.3324L24 11.723L12 4ZM36 4L24 11.723L36 19.3324L48 11.723L36 4ZM0 27.0554L12 34.7784L24 27.0554L12 19.3324L0 27.0554ZM36 19.3324L24 27.0554L36 34.7784L48 27.0554L36 19.3324ZM12 37.277L24 45L36 37.277L24 29.6676L12 37.277Z'
                          fill='#0069FB'
                        />
                      </svg>
                      <div className='ml-3'>
                        <h5 className='mb-0'>Dropbox</h5>
                        <span>Productivity</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className='col-sm-6 aos-init aos-animate'
                    data-aos='fade-left'
                    data-aos-delay='300'
                  >
                    <a
                      href='#'
                      className='card card-sm card-body flex-row align-items-center hover-shadow-3d'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        className='injected-svg'
                        data-src='assets/img/logos/product/slack.svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <path
                          d='M30.2369 5.58619C29.5985 3.62093 27.4877 2.5455 25.5227 3.18423C23.5575 3.82263 22.482 5.93346 23.1208 7.89839L32.7948 37.6628C33.4591 39.4988 35.4423 40.5304 37.346 39.9826C39.3318 39.411 40.5421 37.3019 39.9085 35.3518L30.2369 5.58619Z'
                          fill='#DFA22F'
                        />
                        <path
                          d='M15.2471 10.4567C14.6083 8.49165 12.4977 7.41621 10.5327 8.05462C8.56729 8.69318 7.49168 10.8038 8.13058 12.7691L17.8048 42.5337C18.4689 44.3695 20.4523 45.4013 22.356 44.853C24.3416 44.2817 25.5519 42.1727 24.9183 40.2222L15.2471 10.4567Z'
                          fill='#3CB187'
                        />
                        <path
                          d='M42.4139 30.2372C44.3792 29.5988 45.4543 27.4883 44.8159 25.5229C44.1775 23.5579 42.0666 22.4823 40.1017 23.1209L10.3372 32.7952C8.50124 33.4592 7.46962 35.4424 8.01743 37.3461C8.58904 39.3317 10.6981 40.5422 12.6482 39.9086L42.4139 30.2374'
                          fill='#CE1E5B'
                        />
                        <path
                          d='M16.5407 38.6439L23.6546 36.3325L21.3429 29.2179L14.2285 31.5302L16.5407 38.644'
                          fill='#392538'
                        />
                        <path
                          d='M31.5306 33.7732C34.2201 32.8996 36.7199 32.0873 38.6446 31.4618L36.3326 24.3459L29.2183 26.6582L31.5306 33.7732Z'
                          fill='#BB242A'
                        />
                        <path
                          d='M37.5434 15.2472C39.5084 14.6088 40.5839 12.4982 39.9455 10.5328C39.3071 8.56782 37.1963 7.49239 35.231 8.13079L5.4663 17.8053C3.63052 18.469 2.59873 20.4523 3.14704 22.356C3.71832 24.3414 5.82735 25.5519 7.77784 24.9183L37.5434 15.2471'
                          fill='#72C5CD'
                        />
                        <path
                          d='M11.6688 23.6543C13.6062 23.0247 16.104 22.213 18.7838 21.3426C17.9102 18.6527 17.0979 16.153 16.4724 14.2279L9.35645 16.5406L11.6688 23.6543Z'
                          fill='#248C73'
                        />
                        <path
                          d='M26.6586 18.7839L33.7739 16.4718C33.0032 14.0998 32.2325 11.7278 31.4617 9.35587L24.3462 11.6686L26.6586 18.7839Z'
                          fill='#62803A'
                        />
                      </svg>
                      <div className='ml-3'>
                        <h5 className='mb-0'>Slack</h5>
                        <span>Communication</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className='col-sm-6 aos-init aos-animate'
                    data-aos='fade-left'
                    data-aos-delay='400'
                  >
                    <a
                      href='#'
                      className='card card-sm card-body flex-row align-items-center hover-shadow-3d'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        className='injected-svg'
                        data-src='assets/img/logos/product/trello.svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                      >
                        <path
                          d='M43.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V43.3125C0 45.9013 2.09867 48 4.6875 48H43.3125C45.9013 48 48 45.9013 48 43.3125V4.6875C48 2.09867 45.9013 0 43.3125 0Z'
                          fill='#0091E6'
                        />
                        <path
                          d='M39.51 6.24002H29.37C28.1274 6.24002 27.12 7.24738 27.12 8.49002V24.99C27.12 26.2327 28.1274 27.24 29.37 27.24H39.51C40.7526 27.24 41.76 26.2327 41.76 24.99V8.49002C41.76 7.24738 40.7526 6.24002 39.51 6.24002Z'
                          fill='white'
                        />
                        <path
                          d='M18.63 6.24002H8.48999C7.24735 6.24002 6.23999 7.24738 6.23999 8.49002V36.99C6.23999 38.2327 7.24735 39.24 8.48999 39.24H18.63C19.8726 39.24 20.88 38.2327 20.88 36.99V8.49002C20.88 7.24738 19.8726 6.24002 18.63 6.24002Z'
                          fill='white'
                        />
                      </svg>
                      <div className='ml-3'>
                        <h5 className='mb-0'>Trello</h5>
                        <span>Productivity</span>
                      </div>
                    </a>
                  </div>
                </div>
                <a href='#' className='hover-arrow'>
                  View all Integrations
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='has-divider bg-primary-alt'>
          <div className='container pt-5'>
            <div className='row justify-content-between align-items-center o-hidden'>
              <div className='col-md-6 col-lg-5'>
                <div
                  className='d-flex mb-4 aos-init aos-animate'
                  data-aos='fade-up'
                  data-aos-delay='NaN'
                >
                  <div className='process-circle bg-primary' />
                  <div className='ml-3'>
                    <h5>1. Purchase a license</h5>
                    <p>
                      Voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                  </div>
                </div>
                <div
                  className='d-flex mb-4 aos-init aos-animate'
                  data-aos='fade-up'
                  data-aos-delay='NaN'
                >
                  <div className='process-circle bg-primary' />
                  <div className='ml-3'>
                    <h5>2. Build stunning sites</h5>
                    <p>
                      Voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                  </div>
                </div>
                <div
                  className='d-flex mb-4 aos-init aos-animate'
                  data-aos='fade-up'
                  data-aos-delay='NaN'
                >
                  <div className='process-circle bg-primary' />
                  <div className='ml-3'>
                    <h5>3. Deploy and make money</h5>
                    <p>
                      Voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 aos-init aos-animate'
                data-aos='fade-left'
              >
                <img src='assets/img/saas-4.svg' alt='Image' />
              </div>
            </div>
          </div>
          <div className='divider'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='100%'
              height='96px'
              viewBox='0 0 100 100'
              version='1.1'
              preserveAspectRatio='none'
              className='injected-svg'
              data-src='assets/img/dividers/divider-3.svg'
            >
              <path d='M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100' />
            </svg>
          </div>
        </section>

        <section className='p-0'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-6 col-lg-7 col-md-8 mb-lg-n7 layer-2'>
                <img
                  src='assets/img/saas-1.svg'
                  alt='Image'
                  data-aos='fade-up'
                  className='aos-init aos-animate'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='bg-primary text-light has-divider'>
          <div className='divider flip-y'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='100%'
              height='96px'
              viewBox='0 0 100 100'
              version='1.1'
              preserveAspectRatio='none'
              className='injected-svg'
              data-src='assets/img/dividers/divider-3.svg'
            >
              <path d='M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100' />
            </svg>
          </div>
          <div className='container'>
            <div className='row justify-content-center mb-0 mb-md-3'>
              <div className='col-xl-6 col-lg-8 col-md-10 text-center'>
                <h3 className='h1'>Power your team with Leap</h3>
              </div>
            </div>
            <div className='row justify-content-center text-center'>
              <div className='col-xl-6 col-lg-7 col-md-9'>
                <form className='d-md-flex mb-3 justify-content-center'>
                  <input
                    type='email'
                    className='mx-1 mb-2 mb-md-0 form-control form-control-lg'
                    placeholder='Email Address'
                  />
                  <button
                    className='mx-1 btn btn-primary-3 btn-lg'
                    type='submit'
                  >
                    Get Started
                  </button>
                </form>
                <div className='text-small text-muted mx-xl-6'>
                  Add some helper text here to explain the fine print details of
                  your product or service.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
