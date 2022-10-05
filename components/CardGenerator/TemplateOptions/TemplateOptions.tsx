import React, { useContext, useState } from "react";
import { TemplatesContext } from "../../../store/templates-context";
import { useRouter } from "next/router";

import PageNumbers from "../../Layout/PageNumbers";

const Templates = () => {
  const router = useRouter();
  const templatesCtx = useContext(TemplatesContext);

  const templates = templatesCtx;

  const templatesPerPage = 12;

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const indexOfLastTemplate = currentPageNumber * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;

  const paginate = (pageNumber: number) => setCurrentPageNumber(pageNumber);

  const selectTemplateHandler = (event: any) => {
    router.push("/card-generator/" + event.target.id);
  };

  const currentTemplates = templates.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );
  return (
    <div className="grid px-52 gap-2 py-8">
      <h1 className="text-4xl font-bold mt-8">Modal Card Generator</h1>
      <p className="w-[500px]">
        Measure your return on email marketing efforts easier and faster by
        using the best online tools. Popupsmart is ready to help you build an
        efficient email list!
      </p>
      <div className="flex items-center space-x-4 mt-12">
        <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
          1
        </p>
        <h3 className="text-lg font-semibold">Choose your template</h3>
      </div>
      <div
        data-testid="current-templates"
        className="grid grid-cols-4 place-items-center"
      >
        {currentTemplates.map((t) => (
          <div
            key={t.props.id}
            className="pointer-events-none grid place-content-center p-8 border-2 w-[480px] h-[430px] -mb-36 rounded-3xl border-custom-dark-gray bg-custom-light-gray scale-50"
          >
            <t.template templateProps={t.props} />
            <button
              id={t.props.id}
              onClick={selectTemplateHandler}
              className="grid transition-all absolute rounded-3xl text-2xl font-semibold opacity-0 hover:opacity-100 hover:bg-custom-purple hover:bg-opacity-60 pointer-events-auto w-full h-full"
            >
              <div className="px-8 py-7 bg-custom-white place-self-center text-custom-purple rounded-xl w-fit">
                Select Template
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <PageNumbers
          paginate={paginate}
          templatesPerPage={templatesPerPage}
          totalTemplates={templates.length}
        />
      </div>
    </div>
  );
};

export default Templates;
