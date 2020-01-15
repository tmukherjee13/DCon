import React, { Component } from 'react';

class Dasboard extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="page-title-box">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h4 className="page-title">Dashboard</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Welcome to Dashboard</li>
                            </ol>

                        </div>
                        <div className="col-sm-6">

                            <div className="float-right d-none d-md-block">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle arrow-none waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="mdi mdi-settings mr-2"></i> Settings
                                            </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary text-white">
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="float-left mini-stat-img mr-4">
                                        <img src="assets/images/services-icon/01.png" alt="" />
                                    </div>
                                    <h5 className="font-16 text-uppercase mt-0 text-white-50">Orders</h5>
                                    <h4 className="font-500">1,685 <i className="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                    <div className="mini-stat-label bg-success">
                                        <p className="mb-0">+ 12%</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="float-right">
                                        <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                    </div>

                                    <p className="text-white-50 mb-0">Since last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary text-white">
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="float-left mini-stat-img mr-4">
                                        <img src="assets/images/services-icon/02.png" alt="" />
                                    </div>
                                    <h5 className="font-16 text-uppercase mt-0 text-white-50">Revenue</h5>
                                    <h4 className="font-500">52,368 <i className="mdi mdi-arrow-down text-danger ml-2"></i></h4>
                                    <div className="mini-stat-label bg-danger">
                                        <p className="mb-0">- 28%</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="float-right">
                                        <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                    </div>

                                    <p className="text-white-50 mb-0">Since last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary text-white">
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="float-left mini-stat-img mr-4">
                                        <img src="assets/images/services-icon/03.png" alt="" />
                                    </div>
                                    <h5 className="font-16 text-uppercase mt-0 text-white-50">Average Price</h5>
                                    <h4 className="font-500">15.8 <i className="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                    <div className="mini-stat-label bg-info">
                                        <p className="mb-0"> 00%</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="float-right">
                                        <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                    </div>

                                    <p className="text-white-50 mb-0">Since last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary text-white">
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="float-left mini-stat-img mr-4">
                                        <img src="assets/images/services-icon/04.png" alt="" />
                                    </div>
                                    <h5 className="font-16 text-uppercase mt-0 text-white-50">Product Sold</h5>
                                    <h4 className="font-500">2436 <i className="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                    <div className="mini-stat-label bg-warning">
                                        <p className="mb-0">+ 84%</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="float-right">
                                        <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></a>
                                    </div>

                                    <p className="text-white-50 mb-0">Since last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-9">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-5">Monthly Earning</h4>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div>
                                            <div id="chart-with-area" className="ct-chart earning ct-golden-section"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-center">
                                                    <p className="text-muted mb-4">This month</p>
                                                    <h4>$34,252</h4>
                                                    <p className="text-muted mb-5">It will be as simple as in fact it will be occidental.</p>
                                                    <span className="peity-donut" data-peity='{ "fill": ["#02a499", "#f2f2f2"], "innerRadius": 28, "radius": 32 }' data-width="72" data-height="72">4/5</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text-center">
                                                    <p className="text-muted mb-4">Last month</p>
                                                    <h4>$36,253</h4>
                                                    <p className="text-muted mb-5">It will be as simple as in fact it will be occidental.</p>
                                                    <span className="peity-donut" data-peity='{ "fill": ["#02a499", "#f2f2f2"], "innerRadius": 28, "radius": 32 }' data-width="72" data-height="72">3/5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h4 className="mt-0 header-title mb-4">Sales Analytics</h4>
                                </div>
                                <div className="wid-peity mb-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <p className="text-muted">Online</p>
                                                <h5 className="mb-4">1,542</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <span className="peity-line" data-width="100%" data-peity='{ "fill": ["rgba(2, 164, 153,0.3)"],"stroke": ["rgba(2, 164, 153,0.8)"]}' data-height="60">6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wid-peity mb-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <p className="text-muted">Offline</p>
                                                <h5 className="mb-4">6,451</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <span className="peity-line" data-width="100%" data-peity='{ "fill": ["rgba(2, 164, 153,0.3)"],"stroke": ["rgba(2, 164, 153,0.8)"]}' data-height="60">6,2,8,4,-3,8,1,-3,6,-5,9,2,-8,1,4,8,9,8,2,1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <p className="text-muted">Marketing</p>
                                                <h5>84,574</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <span className="peity-line" data-width="100%" data-peity='{ "fill": ["rgba(2, 164, 153,0.3)"],"stroke": ["rgba(2, 164, 153,0.8)"]}' data-height="60">6,2,8,4,3,8,1,3,6,5,9,2,8,1,4,8,9,8,2,1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">Sales Report</h4>

                                <div className="cleafix">
                                    <p className="float-left"><i className="mdi mdi-calendar mr-1 text-primary"></i> Jan 01 - Jan 31</p>
                                    <h5 className="font-18 text-right">$4230</h5>
                                </div>

                                <div id="ct-donut" className="ct-chart wid"></div>

                                <div className="mt-4">
                                    <table className="table mb-0">
                                        <tbody>
                                            <tr>
                                                <td><span className="badge badge-primary">Desk</span></td>
                                                <td>Desktop</td>
                                                <td className="text-right">54.5%</td>
                                            </tr>
                                            <tr>
                                                <td><span className="badge badge-success">Mob</span></td>
                                                <td>Mobile</td>
                                                <td className="text-right">28.0%</td>
                                            </tr>
                                            <tr>
                                                <td><span className="badge badge-warning">Tab</span></td>
                                                <td>Tablets</td>
                                                <td className="text-right">17.5%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">Activity</h4>
                                <ol className="activity-feed">
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date">Jan 22</span>
                                            <span className="activity-text">Responded to need “Volunteer Activities”</span>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date">Jan 20</span>
                                            <span className="activity-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui deleniti atque...<a href="#" className="text-success">Read more</a></span>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date">Jan 19</span>
                                            <span className="activity-text">Joined the group “Boardsmanship Forum”</span>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date">Jan 17</span>
                                            <span className="activity-text">Responded to need “In-Kind Opportunity”</span>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date">Jan 16</span>
                                            <span className="activity-text">Sed ut perspiciatis unde omnis iste natus error sit rem.</span>
                                        </div>
                                    </li>
                                </ol>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-center py-4">
                                            <i className="ion ion-ios-checkmark-circle-outline display-4 text-success"></i>

                                            <h5 className="text-primary mt-4">Order Successful</h5>
                                            <p className="text-muted">Thanks you so much for your order.</p>
                                            <div className="mt-4">
                                                <a href="" className="btn btn-primary btn-sm">Chack Status</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="card bg-primary">
                                    <div className="card-body">
                                        <div className="text-center text-white py-4">
                                            <h5 className="mt-0 mb-4 text-white-50 font-16">Top Product Sale</h5>
                                            <h1>1452</h1>
                                            <p>Computer</p>
                                            <p className="text-white-50 mb-0">At solmen va esser necessi far uniform myth... <a href="#" className="text-white">View more</a></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title mb-4">Client Reviews</h4>
                                        <p className="text-muted mb-5">" Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators it would be necessary. "</p>
                                        <div className="float-right mt-2">
                                            <a href="#" className="text-primary">
                                                <i className="mdi mdi-arrow-right h5"></i>
                                            </a>
                                        </div>
                                        <h6 className="mb-0"><img src="assets/images/users/user-3.jpg" alt="" className="thumb-sm rounded-circle mr-2" /> James Athey</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">Latest Trasaction</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">(#) Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col" colSpan="2">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">#14256</th>
                                                <td>
                                                    <div>
                                                        <img src="assets/images/users/user-2.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Philip Smead
                                                        </div>
                                                </td>
                                                <td>15/1/2018</td>
                                                <td>$94</td>
                                                <td><span className="badge badge-success">Delivered</span></td>
                                                <td>
                                                    <div>
                                                        <a href="#" className="btn btn-primary btn-sm">Edit</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">#14257</th>
                                                <td>
                                                    <div>
                                                        <img src="assets/images/users/user-3.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Brent Shipley
                                                        </div>
                                                </td>
                                                <td>16/1/2019</td>
                                                <td>$112</td>
                                                <td><span className="badge badge-warning">Pending</span></td>
                                                <td>
                                                    <div>
                                                        <a href="#" className="btn btn-primary btn-sm">Edit</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">#14258</th>
                                                <td>
                                                    <div>
                                                        <img src="assets/images/users/user-4.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Robert Sitton
                                                        </div>
                                                </td>
                                                <td>17/1/2019</td>
                                                <td>$116</td>
                                                <td><span className="badge badge-success">Delivered</span></td>
                                                <td>
                                                    <div>
                                                        <a href="#" className="btn btn-primary btn-sm">Edit</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">#14259</th>
                                                <td>
                                                    <div>
                                                        <img src="assets/images/users/user-5.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Alberto Jackson
                                                        </div>
                                                </td>
                                                <td>18/1/2019</td>
                                                <td>$109</td>
                                                <td><span className="badge badge-danger">Cancel</span></td>
                                                <td>
                                                    <div>
                                                        <a href="#" className="btn btn-primary btn-sm">Edit</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">#14260</th>
                                                <td>
                                                    <div>
                                                        <img src="assets/images/users/user-6.jpg" alt="" className="thumb-md rounded-circle mr-2" /> David Sanchez
                                                        </div>
                                                </td>
                                                <td>19/1/2019</td>
                                                <td>$120</td>
                                                <td><span className="badge badge-success">Delivered</span></td>
                                                <td>
                                                    <div>
                                                        <a href="#" className="btn btn-primary btn-sm">Edit</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">Chat</h4>
                                <div className="chat-conversation">
                                    <ul className="conversation-list slimscroll" style={{ maxHeight: "400px" }}>
                                        <li className="clearfix">
                                            <div className="chat-avatar">
                                                <img src="assets/images/users/user-2.jpg" alt="male" />
                                                <span className="time">10:00</span>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <span className="user-name">John Deo</span>
                                                    <p>
                                                        Hello!
                                                            </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix odd">
                                            <div className="chat-avatar">
                                                <img src="assets/images/users/user-3.jpg" alt="Female" />
                                                <span className="time">10:01</span>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <span className="user-name">Smith</span>
                                                    <p>
                                                        Hi, How are you? What about our next meeting?
                                                            </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <div className="chat-avatar">
                                                <img src="assets/images/users/user-2.jpg" alt="male" />
                                                <span className="time">10:04</span>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <span className="user-name">John Deo</span>
                                                    <p>
                                                        Yeah everything is fine
                                                            </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix odd">
                                            <div className="chat-avatar">
                                                <img src="assets/images/users/user-3.jpg" alt="male" />
                                                <span className="time">10:05</span>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <span className="user-name">Smith</span>
                                                    <p>
                                                        Wow that's great
                                                            </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="clearfix odd">
                                            <div className="chat-avatar">
                                                <img src="assets/images/users/user-3.jpg" alt="male" />
                                                <span className="time">10:08</span>
                                            </div>
                                            <div className="conversation-text">
                                                <div className="ctext-wrap">
                                                    <span className="user-name mb-2">Smith</span>

                                                    <img src="assets/images/small/img-1.jpg" alt="" height="48px" className="rounded mr-2" />
                                                    <img src="assets/images/small/img-2.jpg" alt="" height="48px" className="rounded" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-sm-9 col-8 chat-inputbar">
                                            <input type="text" className="form-control chat-input" placeholder="Enter your text" />
                                        </div>
                                        <div className="col-sm-3 col-4 chat-send">
                                            <button type="submit" className="btn btn-success btn-block">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Dasboard;