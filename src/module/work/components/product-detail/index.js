import clsx from 'clsx'
import React, { memo } from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { ALL_PROJECT_DETAIL } from '@/constants/projects'
import ArticleHeader from '@/components/article-header'
import useScrollTop from '@/hooks/useScrollTop'
import NotFound from '@/components/not-found'

const ProductInformation = () => {
  const { id } = useParams()
  const location = useLocation()

  const data = ALL_PROJECT_DETAIL[id] || {}
  if (!data.name) return <NotFound />

  const nextProject = ALL_PROJECT_DETAIL[data?.nextProjectId] || {}

  useScrollTop(location.pathname)

  return (
    <div
      className={clsx(
        'product-information my-container',
        !data?.name ? 'hide' : ''
      )}
    >
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
        </div>

        <div className="product-information__content__right">
          <div dangerouslySetInnerHTML={{ __html: data?.right_content }} />
        </div>

        <div className="product-information__content__footer">
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
      </div>

      <div
        className={clsx(
          'product-information__next',
          !nextProject?.name ? 'hide' : ''
        )}
      >
        <div>Next project</div>
        <hr />

        <CSSTransition classNames="next-project" timeout={2000}>
          <ArticleHeader
            className="product-information__next__header"
            name={nextProject?.name}
            description={nextProject?.description}
            banner={nextProject?.banner}
            link={nextProject?.link}
            type={nextProject?.type_of_client?.concat(
              ', ',
              nextProject?.type_of_work
            )}
          />
        </CSSTransition>
      </div>
    </div>
  )
}

export default memo(ProductInformation)
