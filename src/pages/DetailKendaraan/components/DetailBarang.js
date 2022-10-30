/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';

const DetailBarang = ({title, subtitle}) => {
  return (
    <DataTable>
      <DataTable.Row>
        <DataTable.Cell>{title}</DataTable.Cell>
        <DataTable.Cell>:</DataTable.Cell>
        <DataTable.Cell style={{justifyContent: 'flex-end'}}>
          {subtitle}
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default DetailBarang;

const styles = StyleSheet.create({});
