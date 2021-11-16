import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import logo from '@/static/svg/logo-icon.svg'
import bgSoftware from '@/static/image/software/bg-software.svg'
import productHDBank from '@/static/image/software/product-hdbank.png'
import productVietinBank from '@/static/image/software/product-vietinbank.png'
import productMBBank from '@/static/image/software/product-mbal.png'
import productVietjet from '@/static/image/software/product-vietjet.png'
import productMaua from '@/static/image/software/product-maua.png'
import productACB from '@/static/image/software/product-acb.png'
import productKimAn from '@/static/image/software/product-kiman.png'
import productWMC from '@/static/image/software/product-wmc.png'
import bgIcon1 from '@/static/image/software/Group-8.png'
import bgIcon2 from '@/static/image/software/Group-19.png'
import bgIcon3 from '@/static/image/software/Group-4.png'

const index = () => {
  const imgRef = useRef(null)
  const boxCenterRef = useRef(null)
  const MBBankRef = useRef(null)
  const HDBankRef = useRef(null)
  const fieldTechRef = useRef(null)
  const airlineRef = useRef(null)
  const bankingFinanceRef = useRef(null)
  const hospitalRef = useRef(null)
  const [imgUrl, setImgUrl] = useState(null)
  const [isCenterHover, setIsCenterHover] = useState(false)
  const [styleBoxProduct, setStyleBoxProduct] = useState({})

  const imgMapped = {
    mbbank: productMBBank,
    vietinbank: productVietinBank,
    vietjet: productVietjet,
    hdbank: productHDBank,
    maua: productMaua,
    acbank: productACB,
    kiman: productKimAn,
    wmc: productWMC
  }

  const fieldList = [{
    ref: bankingFinanceRef,
    field: 'banking'
  },
  {
    ref: airlineRef,
    field: 'airline'
  },
  {
    ref: fieldTechRef,
    field: 'technology'
  },
  {
    ref: hospitalRef,
    field: 'hospital'
  }]

  const effectField = (field, action = 'add') => {
    if (action === 'add') {
      fieldList.forEach(item => {
        if (item.field !== field) {
          item.ref.current.classList[action]('no-hover')
        } else {
          item.ref.current.classList.remove('no-hover')
        }
      })
    } else {
      fieldList.forEach(item => {
        item.ref.current.classList[action]('no-hover')
      })
    }
  }

  const handleHover = (project, field) => (e) => {
    e.persist()
    const itemList = document.querySelectorAll('.software-item')

    const {
      height,
      width
    } = boxCenterRef.current?.getBoundingClientRect()

    const styleOfProductBox = {
      height,
      width
    }

    effectField(field)

    itemList.forEach(item => {
      if (item.getAttribute('data-id') !== project) {
        item.classList.add('no-hover')
      }
    })

    if (project === 'vietinbank') {
      MBBankRef.current.style.borderColor = '#E55436'
      MBBankRef.current.style.borderBottomWidth = '0px'

      HDBankRef.current.style.borderColor = '#E55436'
      HDBankRef.current.style.borderTopWidth = '0px'

      setIsCenterHover(true)
    } else {
      MBBankRef.current.style.borderColor = '#474644'
      MBBankRef.current.style.borderBottomWidth = '1px'

      HDBankRef.current.style.borderColor = '#474644'
      HDBankRef.current.style.borderTopWidth = '1px'

      styleOfProductBox.borderWidth = '1px'
    }

    setImgUrl(() => imgMapped[project])
    setStyleBoxProduct(styleOfProductBox)
  }

  const handleMouseLeave = () => {
    const itemList = document.querySelectorAll('.software-item')

    itemList.forEach(item => {
      item.classList.remove('no-hover')
    })

    effectField('', 'remove')

    if (isCenterHover) {
      setIsCenterHover(false)
    }

    MBBankRef.current.style.borderColor = '#474644'
    MBBankRef.current.style.borderBottomWidth = '1px'

    HDBankRef.current.style.borderColor = '#474644'
    HDBankRef.current.style.borderTopWidth = '1px'

    setImgUrl(null)
  }

  return (
    <>
      <div className="software-background">
        <img className="rotating" src={bgSoftware} alt="background-software"/>
      </div>
      <div className="software">
        <div className="software-main">
          <div className="software-bg-icon icon-1">
            <img src={bgIcon1} alt="background-software"/>
          </div>
          <div className="software-bg-icon icon-2">
            <img src={bgIcon2} alt="background-software"/>
          </div>
          <div className="software-bg-icon icon-3">
            <img src={bgIcon3} alt="background-software"/>
          </div>
          <div className="logo">
            <img src={logo} alt="logo Dinovative"/>
            <h2 className="logo-heading heading-5">our finest work Here</h2>
          </div>
          <div className="software-content">
            <div className="software-list" >
              <div
                ref={MBBankRef}
                className="software-item"
                data-id="mbbank"
                onMouseEnter={handleHover('mbbank', 'banking')}
                onMouseLeave={handleMouseLeave}
                style={{
                  zIndex: isCenterHover ? 100 : 'unset'
                }}
              >
                <span ref={bankingFinanceRef} data-id="mbbank">Banking & Finance</span>
                {!isCenterHover && <h2 className="heading-2">MB Ageas life</h2>}
              </div>
              <div
                ref={boxCenterRef}
                className="software-item"
                data-id="vietinbank"
                onMouseEnter={handleHover('vietinbank', 'banking')}
                onMouseLeave={handleMouseLeave}
              >
                {(isCenterHover || (!imgUrl && !isCenterHover)) && <h2 className="heading-2">Vietin Bank</h2>}
                <CSSTransition
                  in={Boolean(imgUrl)}
                  classNames="fade"
                  unmountOnExit
                >
                  <div
                    onMouseEnter={handleHover('vietinbank', 'banking')}
                    className="software-product-show" style={{
                      left: isCenterHover ? `${-styleBoxProduct?.width}px` : '0',
                      ...styleBoxProduct
                    }}
                  >
                    <img ref={imgRef} src={imgUrl} alt="software-product"/>
                  </div>
                </CSSTransition>
              </div>
              <div
                className="software-item"
                data-id="vietjet"
                onMouseEnter={handleHover('vietjet', 'airline')}
                onMouseLeave={handleMouseLeave}
              >
                <span ref={airlineRef}>Airline</span>
                <h2 className="heading-2">Vietjet air</h2>
              </div>
              <div
                ref={HDBankRef}
                className="software-item"
                data-id="hdbank"
                onMouseEnter={handleHover('hdbank', 'banking')}
                onMouseLeave={handleMouseLeave}
                style={{
                  zIndex: isCenterHover ? 100 : 'unset'
                }}
              >
                {!isCenterHover && <h2 className="heading-2">HDBank</h2>}
              </div>
              <div
                className="software-item"
                data-id="maua"
                onMouseEnter={handleHover('maua', 'technology')}
                onMouseLeave={handleMouseLeave}
              >
                <span ref={fieldTechRef} data-id="maua">Technology</span>
                <h2 className="heading-2">Maua</h2>
              </div>
              <div
                className="software-item"
                data-id="acbank"
                onMouseEnter={handleHover('acbank', 'banking')}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="heading-2">ACB</h2>
              </div>
              <div
                className="software-item"
                data-id="kiman"
                onMouseEnter={handleHover('kiman', 'banking')}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="heading-2">Kim An group</h2>
              </div>
              <div
                className="software-item"
                data-id="wmc"
                onMouseEnter={handleHover('wmc', 'hospital')}
                onMouseLeave={handleMouseLeave}
              >
                <span ref={hospitalRef}>Hospitality</span>
                <h2 className="heading-2">WMC</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
