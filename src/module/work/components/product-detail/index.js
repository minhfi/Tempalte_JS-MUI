import clsx from 'clsx'
import { useParams } from 'react-router'
import React, { memo, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { ALL_PROJECT_DETAIL } from '@/constants/projects'
import ArticleHeader from '@/components/article-header'
import NotFound from '@/components/not-found'
import useScrollTop from '@/hooks/useScrollTop'

const Footer = ({ data, position }) => {
  return (
    <div
      className={clsx(
        'product-information__content__footer',
        position ? `f-${position}` : ''
      )}
    >
      <div className="product-information__content__footer__item">
        <div>Client</div>
        <div>{data?.client}</div>
      </div>

      <div className="product-information__content__footer__item">
        <div>Office</div>
        <div>{data?.office}</div>
      </div>

      <div className="product-information__content__footer__item">
        <div>Sector</div>
        <div>{data?.type_of_work}</div>
      </div>

      <div className="product-information__content__footer__item">
        <div>Discipline</div>
        <div>{data?.type_of_client}</div>
      </div>

      <div className="product-information__content__footer__item">
        <div>Project team</div>
        <div>
          {data?.project_teams?.map((name, i) => (
            <div key={i}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ProductInformation = () => {
  const { id } = useParams()
  const nextRef = useRef(null)

  const data = ALL_PROJECT_DETAIL[id] || {}
  if (!data.name) return <NotFound />

  const nextProject = ALL_PROJECT_DETAIL[data?.nextProjectId] || {}

  const handleExit = () => {
    if (!nextRef.current) {
      return
    }
    const offsetY = -nextRef.current.getBoundingClientRect().y + 114 // 114 = Header + paddingTop = 60 + 54
    nextRef.current.style.setProperty('--offsetY', offsetY + 'px')
    nextRef.current.style.paddingBottom = offsetY + 'px'

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 600)
  }

  useScrollTop()

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={id}
        classNames="product-fade"
        timeout={600}
        onExit={handleExit}
      >
        <div
          className={clsx(
            'product-information my-container',
            !data?.name ? 'hide' : ''
          )}
        >
          <div className="product-information__main">
            <ArticleHeader
              className="product-information__header"
              name={data?.name}
              type={data?.type_of_client?.concat(', ', data?.type_of_work)}
              description={data?.description}
              banner={data?.banner}
            />

            <div className="product-information__content">
              <div className="product-information__content__left">
                <div dangerouslySetInnerHTML={{ __html: data?.left_content }} />
                {/* Only show in left column when desktop screen */}
                <Footer data={data} position="left" />
              </div>

              <div className="product-information__content__right">
                <div
                  dangerouslySetInnerHTML={{ __html: data?.right_content }}
                />
              </div>
            </div>
          </div>
          {/* Only show in bottom when mobile screen */}
          <Footer data={data} position="bottom" />
          <div
            className={clsx(
              'product-information__next',
              !nextProject?.name ? 'hide' : ''
            )}
          >
            <div className="product-information__next__label">Next project</div>

            <ArticleHeader
              ref={nextRef}
              className="product-information__next__header"
              name={nextProject?.name}
              type={nextProject?.type_of_client?.concat(
                ', ',
                nextProject?.type_of_work
              )}
              description={nextProject?.description}
              banner={nextProject?.banner}
              link={nextProject?.link}
            />
          </div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default memo(ProductInformation)
