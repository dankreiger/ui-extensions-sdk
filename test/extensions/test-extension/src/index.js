import React from 'react'
import { render } from 'react-dom'
import { init, locations } from 'contentful-ui-extensions-sdk'
import '@contentful/forma-36-react-components/dist/styles.css'
import './index.css'
import { FieldExtension } from './field-extension'
import { PageExtension } from './page-extension'

function renderExtension(element) {
  render(element, document.getElementById('root'))
}

init(sdk => {
  if (sdk.location.is(locations.LOCATION_ENTRY_FIELD)) {
    renderExtension(<FieldExtension sdk={sdk} />)
  } else if (sdk.location.is(locations.LOCATION_PAGE)) {
    renderExtension(<PageExtension sdk={sdk} />)
  }
})