import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import StarItem from '@screens/DoctorReview/components/StarItem';
import SvgDelete from '@svgs/ForgotPassword/SvgDelete';

interface Props {
  avatarUser?: string;
  nameUser?: string;
  rateStar?: number;
  timeReview?: string;
  desciptionReview?: string;
  order?: string;
}

const DoctorReviewItem = memo((props: Props) => {
  const {
    avatarUser,
    nameUser,
    rateStar,
    timeReview,
    desciptionReview,
    order,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Image source={avatarUser} style={styles.avatarUser} />
        <View>
          <Text style={styles.txtNameUser}>{nameUser}</Text>
          {/* <Text style={styles.txtTimeReview}>{order}</Text> */}
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.txtDesciptionReview}>{desciptionReview}</Text>
        <TouchableOpacity style={styles.delete}>
          <SvgDelete color="#5ecf31" />
        </TouchableOpacity>
      </View>
      <View style={styles.starItem}>
        <Text style={styles.txtTimeReview}>{timeReview}</Text>
        {/* <StarItem rateStar={rateStar} /> */}
      </View>
    </View>
  );
});
export default DoctorReviewItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
  },
  infoView: {
    flexDirection: 'row',
  },
  avatarUser: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    overflow: 'hidden',
    marginRight: scaleWidth(12),
  },
  txtNameUser: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtTimeReview: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
  },
  txtDesciptionReview: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginTop: scaleHeight(13),
  },
  starItem: {
    position: 'absolute',
    right: scaleWidth(16),
    top: scaleHeight(19),
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign: 'center',
  },
  delete: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: scaleWidth(10),
    marginTop: scaleHeight(10),
  },
});
