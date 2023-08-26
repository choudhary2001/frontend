import React, { useState } from 'react';
import 'layouts/library/data/index.css';

const L_Table = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('');
  const data = [
    {
      sectionTitle: 'Board of Directors Minutes (0)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Amenity Rental Application',
          date: '1/16/20',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
            {
              documentName: 'Subsection 2',
              description: 'Description for Subsection 2',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 6,
              attachments: 0,
              impressions: 6,
            },
          ],
        },
        {
          documentName: 'Apartment Appliance & Maintenance Manuals',
          date: '',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 1,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Building Documents (3) (2 SubCategories )',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Emergency Information (0)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Information for Board (0)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Information for Staff (0)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'News from the Board (0)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Regulatory Notices/Information (0)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Sales Instructions (0)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    {
      sectionTitle: 'Vendor Contracts (1)',
      additionalDetails: 'Create Subcategory',
      expandableSections: [
        {
          documentName: 'Subzero & Wolf Appliance Registration Instructions',
          date: '10/4/19',
          lastRevisedOn: '',
          expiresOn: '',
          last30DaysViews: 0,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [],
        },
        {
          documentName: 'Resident Manual',
          date: '6/1/21',
          lastRevisedOn: '8/25/21',
          expiresOn: '',
          last30DaysViews: 1,
          lifetimeViews: 11,
          attachments: 0,
          impressions: 11,
          subSections: [
            {
              documentName: 'Subsection 1',
              description: 'Description for Subsection 1',
              date: '',
              lastRevisedOn: '',
              expiresOn: '',
              last30DaysViews: 0,
              lifetimeViews: 5,
              attachments: 0,
              impressions: 5,
            },
          ],
        },
      ],
    },
    // Add more data objects for each section in the table
  ];

  const handleRowToggle = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const handleColumnSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = data.sort((a, b) => {
    if (sortColumn !== '') {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div style={{overflow:"scroll", width:"100%"}}>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleColumnSort('documentName')}>
              Document Name
              {sortColumn === 'documentName' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
            <th onClick={() => handleColumnSort('date')}>
              Date
              {sortColumn === 'date' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
            <th onClick={() => handleColumnSort('lastRevisedOn')}>
              Last Revised On
              {sortColumn === 'lastRevisedOn' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
            <th onClick={() => handleColumnSort('expiresOn')}>
              Expires On
              {sortColumn === 'expiresOn' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
            <th onClick={() => handleColumnSort('last30DaysViews')}>
              Last 30 Days Views
              {sortColumn === 'last30DaysViews' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
            <th onClick={() => handleColumnSort('lifetimeViews')}>
              Lifetime Views
              {sortColumn === 'lifetimeViews' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
            <th onClick={() => handleColumnSort('attachments')}>
              Attachments
              {sortColumn === 'attachments' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
            <th onClick={() => handleColumnSort('impressions')}>
              Impressions
              {sortColumn === 'impressions' && (
                <span className={`sort-icon ${sortDirection}`} />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <tr onClick={() => handleRowToggle(sectionIndex)}>
                <td colSpan={6}>
                  <h4>{section.sectionTitle}</h4>
                </td>
                <td colSpan={2}>
                  <p>{section.additionalDetails}</p>
                </td>
              </tr>
              {expandedRows.includes(sectionIndex) &&
                section.expandableSections.map((row, rowIndex) => (
                  <React.Fragment key={`${sectionIndex}-${rowIndex}`}>
                    <tr>
                      <td>{row.documentName}</td>
                      <td>{row.date}</td>
                      <td>{row.lastRevisedOn}</td>
                      <td>{row.expiresOn}</td>
                      <td>{row.last30DaysViews}</td>
                      <td>{row.lifetimeViews}</td>
                      <td>{row.attachments}</td>
                      <td>{row.impressions}</td>
                    </tr>
                    {row.subSections.map((subSection, subSectionIndex) => (
                      <tr key={`${sectionIndex}-${rowIndex}-${subSectionIndex}`}>
                        <td colSpan={2}>{subSection.documentName}</td>
                        <td colSpan={6}>{subSection.description}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default L_Table;
