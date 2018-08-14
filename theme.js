// example theme.js
import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import diff from 'react-syntax-highlighter/languages/prism/diff'
import graphql from 'react-syntax-highlighter/languages/prism/graphql'
import json from 'react-syntax-highlighter/languages/prism/json'

export default {
  ...future,
  prism: {
    style: okaidia,
    languages: {
      diff,
      graphql,
      json
    }
  }
}
