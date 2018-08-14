// example theme.js
import { future } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import diff from 'react-syntax-highlighter/languages/prism/diff'

export default {
  ...future,
  prism: {
    style: okaidia,
    languages: {
      diff
    }
  }
}
