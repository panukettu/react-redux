import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actionCreators";

const Link = ({ active, ...props }) => {
  if (active) {
    return <span>{props.children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.children}
    </a>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

const Filters = () => (
  <p>
    Show:&nbsp;
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    &nbsp;
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    &nbsp;
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    &nbsp;
  </p>
);

export default Filters;
