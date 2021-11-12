import React, { useRef, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import logo from '@/static/image/logo-icon.png'
import bgSoftware from '@/static/image/bg-software.svg'
import productHDBank from '@/static/image/product-hdbank.png'
import productVietinBank from '@/static/image/product-vietinbank.png'
import bgIcon1 from '@/static/image/Group 8.png'
import bgIcon2 from '@/static/image/Group 19.png'

const index = () => {
  const imgRef = useRef(null)
  const boxCenterRef = useRef(null)
  const MBBankRef = useRef(null)
  const HDBankRef = useRef(null)
  const [imgUrl, setImgUrl] = useState(null)
  const [isCenterHover, setIsCenterHover] = useState(false)
  const [styleProductBox, setStyleProductBox] = useState({})

  const imgMapped = {
    mbbank: productHDBank,
    vietinbank: productVietinBank,
    vietjet: productHDBank,
    hdbank: productHDBank,
    maua: productHDBank,
    acbank: productHDBank,
    kiman: productHDBank,
    wmc: productHDBank
  }

  const handleHover = (project) => (e) => {
    e.persist()
    const itemList = document.querySelectorAll('.software-item')

    const {
      height,
      width,
      top,
      left
    } = boxCenterRef.current?.getBoundingClientRect()

    const styleOfProductBox = {
      height,
      width,
      top,
      left
    }

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
      styleOfProductBox.left = left - width
    } else {
      MBBankRef.current.style.borderColor = '#474644'
      MBBankRef.current.style.borderBottomWidth = '1px'

      HDBankRef.current.style.borderColor = '#474644'
      HDBankRef.current.style.borderTopWidth = '1px'
    }

    setStyleProductBox(() => styleOfProductBox)
    setImgUrl(() => imgMapped[project])
  }

  const handleMouseLeave = () => {
    const itemList = document.querySelectorAll('.software-item')

    itemList.forEach(item => {
      item.classList.remove('no-hover')
    })

    if (isCenterHover) {
      MBBankRef.current.style.borderColor = '#E55436'
      MBBankRef.current.style.borderBottomWidth = '0px'

      HDBankRef.current.style.borderColor = '#E55436'
      HDBankRef.current.style.borderTopWidth = '0px'

      setIsCenterHover(false)
    } else {
      MBBankRef.current.style.borderColor = '#474644'
      MBBankRef.current.style.borderBottomWidth = '1px'

      HDBankRef.current.style.borderColor = '#474644'
      HDBankRef.current.style.borderTopWidth = '1px'
    }

    setImgUrl(null)
  }

  useEffect(() => {
    if (isCenterHover) {
      const {
        height,
        width,
        top,
        left
      } = boxCenterRef.current?.getBoundingClientRect()

      const styleOfProductBox = {
        height,
        width,
        top,
        left: left - width
      }

      setStyleProductBox(() => styleOfProductBox)
    }
  }, [isCenterHover])

  return (
    <>
      <CSSTransition
        in={Boolean(imgUrl)}
        classNames="fade"
        unmountOnExit
      >
        <div
          onMouseEnter={handleHover('vietinbank')}
          className="software-product-show" style={{
            left: isCenterHover ? '-100.5%' : '0',
            ...styleProductBox
          }}
        >
          <img ref={imgRef} src={imgUrl} alt="software-product"/>
        </div>
      </CSSTransition>
      <div className="software">
        <div className="container">
          <div className="software-main">
            <div className="background">
              <img className="" src={bgSoftware} alt="background-software"/>
            </div>
            <div className="software-bg-icon icon-1">
              <img src={bgIcon1} alt="background-software"/>
            </div>
            <div className="software-bg-icon icon-2">
              <img src={bgIcon2} alt="background-software"/>
            </div>
            <div className="logo">
              <img src={logo} alt="logo Dinovative"/>
              <h2 className="logo-heading heading-7">our finest work Here</h2>
            </div>
            <div className="software-content">
              <div className="software-list" >
                <div
                  ref={MBBankRef}
                  className="software-item"
                  data-id="mbbank"
                  onMouseEnter={handleHover('mbbank')}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    zIndex: isCenterHover ? 100 : 'unset'
                  }}
                >
                  <span data-id="mbbank">Banking & Finance</span>
                  {!isCenterHover && <h2 className="heading-1">MB Ageas life</h2>}
                </div>
                <div
                  ref={boxCenterRef}
                  className="software-item"
                  data-id="vietinbank"
                  onMouseEnter={handleHover('vietinbank')}
                  onMouseLeave={handleMouseLeave}
                >
                  {(isCenterHover || (!imgUrl && !isCenterHover)) && <h2 className="heading-1">Vietin Bank</h2>}
                </div>
                <div
                  className="software-item"
                  data-id="vietjet"
                  onMouseEnter={handleHover('vietjet')}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>Airline</span>
                  <h2 className="heading-1">Vietjet air</h2>
                </div>
                <div
                  ref={HDBankRef}
                  className="software-item"
                  data-id="hdbank"
                  onMouseEnter={handleHover('hdbank')}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    zIndex: isCenterHover ? 100 : 'unset'
                  }}
                >
                  {!isCenterHover && <h2 className="heading-1">HDBank</h2>}
                </div>
                <div
                  className="software-item"
                  data-id="maua"
                  onMouseEnter={handleHover('maua')}
                  onMouseLeave={handleMouseLeave}
                >
                  <span data-id="maua">Technology</span>
                  <h2 className="heading-1">Maua</h2>
                </div>
                <div
                  className="software-item"
                  data-id="acbank"
                  onMouseEnter={handleHover('acbank')}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2 className="heading-1">ACB</h2>
                </div>
                <div
                  className="software-item"
                  data-id="kiman"
                  onMouseEnter={handleHover('kiman')}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2 className="heading-1">Kim An group</h2>
                </div>
                <div
                  className="software-item"
                  data-id="wmc"
                  onMouseEnter={handleHover('wmc')}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>Hospitality</span>
                  <h2 className="heading-1">WMC</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
