import '../../../src/containers/mettle-carousel.js'
import '../../../src/informational/mettle-skeleton.js'

export default {
  title: 'Custom Elements/Containers/Mettle-Carousel',
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'Useful when you want to beautifully display a series of content.',
      },
    },
  },
}

const Template = ({}) => {
  return `<mettle-carousel></mettle-carousel>`
}

const args = {

}

export const Default = Template.bind({})
Default.args = {
  ...args
}
Default.parameters = {
  docs: {
    source: {
      code: Template(Default.args)
    }
  },
}
