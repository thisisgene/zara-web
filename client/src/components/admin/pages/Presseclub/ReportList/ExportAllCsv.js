import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useJsonToCsv } from 'react-json-csv'

import { getAllPresseclubReportsByQuery } from '../../../../../actions/reportActions'

import { fieldsAB, fieldsCD, exportPathAB, exportPathCD } from '../ExportCsv'
import * as stepDataA from '../../../../user/pages/Wissen/Presse/Presseclub/steps/pathA/step_data.js'
import * as stepDataC from '../../../../user/pages/Wissen/Presse/Presseclub/steps/pathC/step_data.js'
import * as stepDataD from '../../../../user/pages/Wissen/Presse/Presseclub/steps/pathD/step_data.js'

class ExportAllCsv extends Component {
  state = {
    isLoading: false,
    stepData: [],
  }
  componentDidUpdate(prevProps) {
    if (prevProps.report != this.props.report) {
      if (this.props.report.reportsSelected) {
        this.prepareForExport(this.props.report.reportsSelected)
      }
    }
  }
  exportMultiple = reports => {
    const { saveAsCsv } = useJsonToCsv()
    let filename = '',
      stepData,
      fields
    let data = []
    if (this.state.path === 'ab') {
      filename = `presseclub_meldungen_AB`
      stepData = stepDataA
      fields = fieldsAB
      for (let report of reports) {
        data.push(exportPathAB(report, stepData))
      }
    } else {
      filename = `presseclub_meldungen_CD`
      stepData = stepDataC
      fields = fieldsCD
      for (let report of reports) {
        data.push(exportPathCD(report, stepData))
      }
    }
    saveAsCsv({ data, fields, filename })
  }

  prepareForExport = reports => {
    this.exportMultiple(reports)
  }

  getAllReports = path => {
    this.setState({ isLoading: true, path: path }, () => {
      if (this.state.path === 'ab') {
        this.props.getAllPresseclubReportsByQuery({ category: 'online' })
      }
      if (this.state.path === 'cd') {
        this.props.getAllPresseclubReportsByQuery({ category: 'public' })
      }
    })
  }

  render() {
    return (
      <div
        style={{
          marginBottom: '1rem',
        }}
      >
        <p>Als .csv exportieren</p>
        <div style={{ display: 'flex' }}>
          <button onClick={() => this.getAllReports('ab')}>Pfade A&B</button>
          <button onClick={() => this.getAllReports('cd')}>Pfade C&D</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  report: state.report,
})

export default connect(mapStateToProps, { getAllPresseclubReportsByQuery })(
  ExportAllCsv
)
