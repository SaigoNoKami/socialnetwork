import React from "react";
import PropTypes from "prop-types";

import { connect } from "../../store/index";

import PostForm from "../shared/PostForm";
import Posts from "../shared/Posts";

const AllPosts = ({ auth }) => (
  <div className="row mt-4">
    <div className="col-md-6 mx-auto">
      {auth.isAuthenticated && <PostForm />}
      <Posts queryParams={{}} />
    </div>
  </div>
);

AllPosts.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AllPosts);
