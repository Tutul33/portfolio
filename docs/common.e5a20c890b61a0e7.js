"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[76],{4035:(u,c,a)=>{a.d(c,{B:()=>d});var i=a(6354),s=a(7705),n=a(8515);let d=(()=>{class r{constructor(t){this.firestore=t}saveData(t,e){const o=this.firestore.createId();return this.firestore.collection(t).doc(o).set({...e,id:o})}getData(t){return this.firestore.collection(t).snapshotChanges().pipe((0,i.T)(e=>e.map(o=>{const l=o.payload.doc.data();return{id:o.payload.doc.id,...l}})))}updateData(t,e,o){return this.firestore.collection(t).doc(e).update(o)}deleteData(t,e){return this.firestore.collection(t).doc(e).delete()}static{this.\u0275fac=function(e){return new(e||r)(s.KVO(n.Qe))}}static{this.\u0275prov=s.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})()}}]);