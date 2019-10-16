import fonts from '../fonts/fonts.css'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

export default {
  initialColorMode: 'deep',
  colors: {
    text: '#171717',
    bodyblue: '#A0A9D1',
    background: '#fff',
    primary: '#228CEA',
    secondary: '#0D62AD',
    muted: '#f6f6f6',
    highlight: '#ffffcc',
    gray: '#777',
    purple: '#8634CE',
    modes: {
      dark: {
        text: '#ECECEC',
        background: '#1C1C1C',
        primary: '#38A2FF',
        secondary: '#29D391',
        muted: '#222222',
        highlight: '#ffffcc',
        gray: '#999',
        purple: '#BE73FF',
      },
      deep: {
        text: '#A0A9D1',
        background: '#222639',
        primary: '#29D391',
        secondary: '#19B87A',
        purple: '#BE73FF',
        muted: '#171B2E',
        gray: '#6a86b2',
        white: '#fff',
        
      },
      swiss: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        secondary: 'hsl(10, 60%, 50%)',
        purple: 'hsl(250, 60%, 30%)',
        muted: 'hsl(10, 20%, 94%)',
        gray: 'hsl(10, 20%, 50%)',
      },
    },
  },
  fonts: {
    body: 'soleil, sans-serif',
    heading: 'soleil, sans-serif',
    monospace: '"input-mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: '300',
    heading: '600',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [3, 4, 5, 6],
      mt: 3,
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'textStyles.display',
      letterSpacing: '-2px',
      fontSize: 4,
      color: 'white',
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 4,
      fontWeight: '300',
      marginTop: 50,
      letterSpacing: '-0.5px',
            color: 'white',

    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 1,
      textTransform: 'uppercase',
      letterSpacing: '3px',
      color: 'primary',

    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      borderRadius: '10px',
      p: 20,
      marginTop: 40,
      marginBottom: 40,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit',
      },
    },
    blockquote: {
      color: 'gray',
      marginTop: 40,
      borderColor: 'gray',
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      marginLeft: '0',
      paddingLeft: 20,
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'primary',
      bg: 'muted',
      p: '2px 6px',
      borderRadius: '2px'
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      [['th', 'td']]: {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px dotted',
      borderColor: 'text',
      marginTop: 50,
      marginBottom: 50,
    },
    img: {
      maxWidth: '100%'
    }
  },
  prism: {
    [[
      '.comment',
      '.prolog',
      '.doctype',
      '.cdata',
      '.punctuation',
      '.operator',
      '.entity',
      '.url',
    ]]: {
      color: 'gray',
    },
    '.comment': {
      fontStyle: 'italic',
    },
    [[
      '.property',
      '.tag',
      '.boolean',
      '.number',
      '.constant',
      '.symbol',
      '.deleted',
      '.function',
      '.class-name',
      '.regex',
      '.important',
      '.variable',
    ]]: {
      color: 'purple',
    },
    [['.atrule', '.attr-value', '.keyword']]: {
      color: 'primary',
    },
    [[
      '.selector',
      '.attr-name',
      '.string',
      '.char',
      '.builtin',
      '.inserted',
    ]]: {
      color: 'secondary',
    },
  },
}