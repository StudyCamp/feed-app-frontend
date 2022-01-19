import React from "react";
import { useEffect, useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

const Past30daysTable = ({ feed30Days }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>User Activity in the Past 30 Days</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Username</Label>
          </Table.Cell>
          <Table.Cell>Total Posts</Table.Cell>
          <Table.Cell>Total Likes</Table.Cell>
        </Table.Row>
        {feed30Days.map((filterFeeds, key) => (
          <Table.Row>
            <Table.Cell>{}</Table.Cell>
            <Table.Cell>{}</Table.Cell>
            <Table.Cell>{}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3"></Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default Past30daysTable;
