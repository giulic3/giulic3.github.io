// @flow strict
import React, { useState, useEffect } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  postTitle: string,
  postSlug: string
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata(); // Not using Disqus
  let [ script, anchor ] = useState(0);
  /*
  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={postTitle}
      title={postTitle}
      url={url + postSlug}
    />
  );
  */

  useEffect(() => {
    script = document.createElement("script");
    anchor = document.getElementById("inject-comments-for-utterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin","anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "giulic3/giulic3.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute( "theme", "github-light");
    anchor.appendChild(script);
  });

  return (
    <div id="inject-comments-for-utterances"></div>
  );
};

export default Comments;
