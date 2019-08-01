import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Icon, Confirm } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { FETCH_POSTS_QUERY } from "./../utils/graphql";

function DeleteButton(props) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = props.commentId
    ? DELETE_COMMENT_MUTATION
    : DELETE_POST_MUTATION;

  const [deletePost] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if (!props.commentId) {
        const data = proxy.readQuery({
          query: FETCH_POSTS_QUERY
        });
        data.getPosts = data.getPosts.filter(p => p.id !== props.postId);
        proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      }

      if (props.callback) props.callback();
    },

    variables: {
      postId: props.postId,
      commentId: props.commentId
    }
  });

  return (
    <React.Fragment>
      <Button color='red' floated='right' onClick={() => setConfirmOpen(true)}>
        <Icon name='trash' style={{ margin: 0 }} />
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePost}
      />
    </React.Fragment>
  );
}

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;

export default DeleteButton;
