import React from "react"

import StepA1 from "./pathA/Step1"
import StepA2 from "./pathA/Step2"
import StepAFinal from "./pathA/StepFinal"

export const stepsA = [
  {
    name: "Step 1",
    component: (
      <StepA1
        title={"LIMPI"}
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step 2",
    component: (
      <StepA2
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step Final",
    component: (
      <StepAFinal
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
]

export const stepsB = [
  {
    name: "Step 1",
    component: (
      <StepA1
        title={"LIMPI"}
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step 2",
    component: (
      <StepA2
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step Final",
    component: (
      <StepAFinal
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
]

export const stepsC = [
  {
    name: "Step 1",
    component: (
      <StepA1
        title={"LIMPI"}
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step 2",
    component: (
      <StepA2
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step Final",
    component: (
      <StepAFinal
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
]

export const stepsD = [
  {
    name: "Step 1",
    component: (
      <StepA1
        title={"LIMPI"}
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step 2",
    component: (
      <StepA2
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
  {
    name: "Step Final",
    component: (
      <StepAFinal
        getStore={() => this.getStore()}
        updateStore={(u) => {
          this.updateStore(u)
        }}
        // lang={lang}
      />
    ),
  },
]
