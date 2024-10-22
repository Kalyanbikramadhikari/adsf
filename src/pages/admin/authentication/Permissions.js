import React, { useState } from 'react';

const treeData = {
  label: '0.0- Analysis',
  children: [
    {
      label: '1.1- SAMPLE ANALYSIS',
      children: [
        { label: '2.1- PENDING SAMPLE COLLECTION REPORT' },
        { label: '2.2- SAMPLE COLLECTED REPORT' },
        { label: '2.3- FINDING COMPLETED REPORT' },
        { label: '2.4- VERIFIED SAMPLE REPORT' },
        { label: '2.5- SAMPLE COLLECTION WISE REPORT' },
        { label: '2.6- SAMPLE RECEIVED REPORT' },
        { label: '2.7- TURN AROUND TIME' },
        { label: '2.8- WORK LIST' },
      ],
    },
    {
      label: '1.2- MICROBIOLOGY ANALYSIS',
      children: [
        { label: '2.9- MICRO BIOLOGY SENSITIVITY RESULT' },
        { label: '2.10- MICROBIOLOGY REPORT DETAIL' },
      ],
    },
    {
      label: '1.3- PERFORMANCE ANALYSIS',
      children: [
        { label: '2.11- TESTNAME/CATEGORY WISE TEST DONE' },
        { label: '2.11- NO OF TEST DONE' },
        { label: '2.12- PATIENT TEST LIST' },
        { label: '2.13- LIST OF REFUND' },
        { label: '2.14- TEST SETUP DETAIL' },
        { label: '2.15- PATIENT TEST DETAIL' },
      ],
    },
    {
      label: '1.4- RESULT ANALYSIS',
      children: [
        { label: '2.16- TEST CANCEL REPORT' },
        { label: '2.17- REPORT TO BE DISPATCHED' },
        { label: '2.18- REPORT PRINTED' },
        { label: '2.19- PENDING RESULT ENTRY' },
        { label: '2.20- PENDING FOR AUTHENTICATION' },
      ],
    },
  ],
};

const Permissions = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleTopLevelChange = (label, children) => {
    const isChecked = !selectedItems[label]; // Check if it was already selected
    const newSelectedItems = { ...selectedItems, [label]: isChecked };

    if (isChecked) {
      // Select all children if top-level is checked
      children.forEach((child) => {
        newSelectedItems[child.label] = true; // Select child
        if (child.children) {
          child.children.forEach((subChild) => {
            newSelectedItems[subChild.label] = true; // Select sub-child
          });
        }
      });
    } else {
      // Uncheck all children if top-level is unchecked
      children.forEach((child) => {
        newSelectedItems[child.label] = false; // Unselect child
        if (child.children) {
          child.children.forEach((subChild) => {
            newSelectedItems[subChild.label] = false; // Unselect sub-child
          });
        }
      });
    }

    setSelectedItems(newSelectedItems);
  };

  const handleChildChange = (label, parentLabel, children) => {
    setSelectedItems((prev) => {
      const newSelected = { ...prev, [label]: !prev[label] }; // Toggle selected state for the child

      // Check if any child is unchecked
      const allChecked = children.every((child) => newSelected[child.label] === true);
      
      // Update the parent state based on the children's state
      if (parentLabel) {
        newSelected[parentLabel] = allChecked; // Set parent checked if all children are checked
      }
      
      return newSelected;
    });
  };

  return (
    <div className="mx-auto bg-white p-5 rounded-lg shadow-lg">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={selectedItems[treeData.label] || false}
          onChange={() => handleTopLevelChange(treeData.label, treeData.children)}
        />
        <span>{treeData.label}</span>
      </div>
      {treeData.children.map((child, index) => (
        <div key={index}>
          <div className="flex ml-5 items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedItems[child.label] || false}
              onChange={() => handleTopLevelChange(child.label, child.children)}
            />
            <span>{child.label}</span>
          </div>
          <div className="flex flex-col ml-10">
            {child.children.map((item, index) => (
              <div className="flex items-center" key={index}>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedItems[item.label] || false}
                  onChange={() => handleChildChange(item.label, child.label, child.children)}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Permissions;
