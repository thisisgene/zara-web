import React, { Component } from 'react'
import { useJsonToCsv } from 'react-json-csv'

import { fieldsAB, exportPathAB } from '../ExportCsv'

export default class ExportSingleCsv extends Component {
  exportSingleCsv = (report, stepData, path) => {
    const { saveAsCsv } = useJsonToCsv()

    if (path === 'A' || path === 'B') {
      const filename = `presseclub_meldung_${report.date}`
      const fields = fieldsAB
      let data = exportPathAB(report, stepData)
      data = [data]
      saveAsCsv({ data, fields, filename })
    }
    if (path === 'C' || path === 'D') {
      console.log('happaenif')
    }
  }
  render() {
    const { data, stepData, path } = this.props

    return (
      <div>
        {data && stepData && path && (
          <button
            onClick={this.exportSingleCsv.bind(this, data, stepData, path)}
          >
            Exportieren
          </button>
        )}
      </div>
    )
  }
}
