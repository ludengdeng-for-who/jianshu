import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreateors from "../store/actioncreateors";
import { Link } from "react-router-dom";
class List extends PureComponent {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    let { list, loadMore } = this.props;
    return (
      <>
        {list.map((item, index) => {
          return (
            <Link style={{ textDecoration:'none'}}  to={`/detail/${index}`} key={index}>
             <div className="list-item" >
                <div>
                  <h2 className="title">{item.title}</h2>
                  <p className="info">{item.info}</p>
                </div>
                <img src={item.img} alt="" />
              </div>
            </Link>
             
          );
        })}
        <div className="loadmore" onClick={loadMore}>
          加载更多
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.homeReducer.mainList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch(actionCreateors.getMainList());
    },
    loadMore() {
      dispatch(actionCreateors.loadMore());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
