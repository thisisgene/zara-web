import React from "react"

// import HeroUnit from '../../'
import { screenshotInfo } from "./presseclub_data"
import LongText from "../../../../dashboard/LongText/LongText"
export default function ScreenshotInfo(props) {
  const lang = props.match.params.lang
  return <div>{lang && <LongText content={screenshotInfo} lang={lang} />}</div>
}
