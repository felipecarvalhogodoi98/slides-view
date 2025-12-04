import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import PropTypes from 'prop-types'
import './CodeBlock.css'

function CodeBlock({ code, language = 'javascript' }) {
  return (
    <div className="code-block-wrapper">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: '16px',
          borderRadius: '6px',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          backgroundColor: 'transparent',
        }}
        codeTagProps={{
          style: {
            fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Courier New", monospace',
          }
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
}

export default CodeBlock

